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

  constructor(private windowResize: WindowService, private gameState: GameStateService) {}

  ngOnInit() {
    this.randomNumber();
    this.$gameStateSubscription = this.gameState.reset.subscribe(
      res => {
        console.log(`Observer got passed ${res}`)
      } ,
      error => console.error(error),
      () => console.log("Observer complete")
    )
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
