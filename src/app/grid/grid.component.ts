import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowService } from '../Services/window.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  Tiles: number[] = [...Array(40).keys()];
  resizeSubscription$!: Subscription;
  width = window.innerWidth;
  height = window.innerHeight;
  chosenTiles: number[] = [];
  resetTiles = false;
  score = 0;

  constructor(private windowResize: WindowService) {}

  ngOnInit() {
    this.resizeSubscription$ = this.windowResize
      .windowObs()
      .subscribe((size) => {
        this.height = size.target.innerHeight;
        this.width = size.target.innerWidth;
        console.log(this.width, this.height);
      });
    this.randomNumber();
  }

  randomNumber() {
    //TODO: Logic not correct. Still getting double numbers
    const choose = [...Array(9)].map((_, i) => {
      let x = Math.floor(Math.random() * this.Tiles.length);
      this.chosenTiles.push(<number>this.recur(x, this.chosenTiles));
    });
    console.log(this.chosenTiles);
  }

  muteTiles(input: boolean) {
    this.resetTiles = input;
  }

  incrementScore(input: number){
    this.score = input + 1
    console.log(this.score)
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  private recur = (index: number, tilesArray: number[]) => {
    return !tilesArray.includes(index)
      ? index
      : Math.floor(Math.random() * this.Tiles.length);
  };
}
