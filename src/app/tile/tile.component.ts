import {Component, Input, OnInit} from '@angular/core';
import {ITile} from "../Models/ITile";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, ITile {
  @Input() index!: number;
  @Input() tileCollection!: number[]
  width = 0
  height = 0
  text!: string;
  displayIndex = 0
  chosen!: boolean
  score = 0
  removed = false

  constructor() {
  }

  ngOnInit(): void {
    this.text = this.index.toString()
    this.calcIndex()
  }

  calcIndex() {
    if (this.tileCollection.includes(this.index)) {
      this.chosen = true
      this.displayIndex = (this.tileCollection.indexOf(this.index)) + 1
    }
  }

  selectTile() {
    this.score += 1
    this.removed = true
  }

}
