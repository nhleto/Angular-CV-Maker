import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITile } from '../Models/ITile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit, ITile {
  @Input() index!: number;
  @Input() tileCollection!: number[];
  @Input() muteTilesFinal!: number;
  @Input() childScore!: number;
  @Input() startGame!: boolean;
  @Output() returnedValue = new EventEmitter<boolean>();
  @Output() sendScore = new EventEmitter<number>();
  width = 0;
  height = 0;
  text!: string;
  displayIndex = 0;
  chosen!: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.startGame,"in tile component")
    this.text = this.index.toString();
    this.calcIndex();
  }

  calcIndex() {
    if (this.tileCollection.includes(this.index)) {
      this.chosen = true;
      this.displayIndex = this.tileCollection.indexOf(this.index) + 1;
    }
  }

  interactWithTiles() {
    console.log(this.startGame, "in tile component")
    this.addScore()
    this.calculateReset()
    // Setting hidden here doesn't matter...
    // needs to be one component up
    // this.hidden = true;
  }

  private calculateReset() {
    if (this.childScore + 1 === this.tileCollection.indexOf(this.index) + 1){
      console.log("dont reset")
      // below function is responsible for muting tiles when game starts;
      // if the correct tile isn't chosen, dont start the game
      this.sendTileState(true);
    } else {
      this.sendTileState(false);
      console.log("reset and send to parent component")
    }
  }

  private sendTileState(input:boolean) {
    this.returnedValue.emit(input);
  }

  private addScore() {
    this.sendScore.emit(this.childScore);
  }
}
