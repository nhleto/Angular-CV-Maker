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
  // @Input() tileReset!:number;
  @Output() returnedValue = new EventEmitter<boolean>();
  @Output() sendScore = new EventEmitter<number>();
  width = 0;
  height = 0;
  text!: string;
  displayIndex = 0;
  chosen!: boolean;
  hidden = false;

  constructor() {}

  ngOnInit(): void {
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
    this.addScore()
    this.calculateReset()
    this.hidden = true;
  }

  private calculateReset() {
    if (this.childScore === this.tileCollection.indexOf(this.index) + 1){
      console.log("dont reset")
    } else {
      this.mTiles();
    }
  }

  private mTiles() {
    this.returnedValue.emit(true);
  }

  private addScore() {
    this.sendScore.emit(this.childScore);
  }
}
