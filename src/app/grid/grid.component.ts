import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WindowService} from "../Services/window.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  Tiles: number[] = [...Array(51).keys()];
  resizeSubscription$!: Subscription
  width = window.innerWidth;
  height = window.innerHeight;
  chosenTiles:string[] = []
  constructor(private windowResize: WindowService) { }

  ngOnInit(){
    this.resizeSubscription$ = this.windowResize.windowObs().subscribe(
      ((size) => {
        this.height = size.target.innerHeight;
        this.width = size.target.innerWidth;
        console.log(this.width, this.height);
      })
    )
    this.randomNumber()
  }

  randomNumber() {
    const choose = [...Array(9)].map((_, i) => {
      let x = (Math.floor(Math.random() * this.Tiles.length)).toString()
      this.chosenTiles.push(this.#recur(x, this.chosenTiles))
    })
    console.log(this.chosenTiles)
  }

  #recur = (index: string, tilesArray: string[]) => {
    return !tilesArray.includes(index) ? index : (Math.floor(Math.random() * this.Tiles.length)).toString();
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
