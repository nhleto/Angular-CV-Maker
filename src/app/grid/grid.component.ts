import { Component, OnDestroy, OnInit } from '@angular/core';
import {pipe, Subscription} from 'rxjs';
import { WindowService } from '../Services/window.service';
import { GameStateService } from '../Services/game-state.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  Tiles: number[] = [...Array(75).keys()];
  $resizeSubscription!: Subscription;
  $gameStateSubscription!: Subscription;
  chosenTiles: number[] = [];
  resetTiles = false;
  score = 0;
  gameDifficulty = 9;

    constructor(
        private windowResize: WindowService,
        private gameState: GameStateService
    ) {}

    ngOnInit() {
        this.$gameStateSubscription = this.gameState.gameStateSubject.subscribe(
            (resetVal) => { console.log(resetVal) }
        );

        this.$resizeSubscription = this.windowResize
            .windowObs()
            .subscribe((size) => {
                this.height = size.target.innerHeight;
                this.width = size.target.innerWidth;
                console.log(this.width, this.height);
            });
        this.randomNumber();
    }

  randomNumber() {
    [...Array(this.gameDifficulty)].map((_, i) => {
      let x = Math.floor(Math.random() * this.Tiles.length);
      this.chosenTiles.push(this.recur(x, this.chosenTiles));
    });
    console.log(this.chosenTiles);
  }

  muteTiles(input: boolean) {
    this.resetTiles = input;
  }

  incrementScore(input: number){
    this.score = input;
    console.log(this.score)
  }

  resetGame(input: boolean) {
    input ? this.randomNumber() : null;
  }

  ngOnDestroy() {
    this.$resizeSubscription.unsubscribe();
    this.$gameStateSubscription.unsubscribe();
  }

  private recur = (index: number, tilesArray: number[]) : any => {
    if (!tilesArray.includes(index)){
      return index;
    } else {
      const newNumber = Math.floor(Math.random() * this.Tiles.length);
      return this.recur(newNumber, tilesArray);
    }
  };
}
