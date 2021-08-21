import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {ITile} from '../Models/ITile';
import {GameStateService} from "../Services/game-state.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit, ITile, OnDestroy, OnChanges {
  @Input() index!: number;
  @Input() tileCollection!: number[];
  @Input() muteTilesFinal!: number;
  @Input() childScore!: number;
  @Input() startGame!: boolean;
  @Output() returnedValue = new EventEmitter<boolean>();
  @Output() sendScoreToParent = new EventEmitter<number>();
  $gameStateSubscription!: Subscription;
  width = 0;
  height = 0;
  text!: string;
  displayIndex = 0;
  chosen!: boolean;
  correctTile = true;

  constructor(private gameState: GameStateService) {
  }

  ngOnInit(): void {
    this.text = this.index.toString();
    this.calcIndex();
  }

  ngOnChanges(changes: SimpleChanges) {

    this.$gameStateSubscription = this.gameState.reset.subscribe(
      (sub) => {
        if (sub && changes['tileCollection']) {
          console.log(changes)
          this.tileCollection = changes['tileCollection'].currentValue;
          this.calcIndex();
        }
      }
    )
  }

  calcIndex() {
    if (this.tileCollection.includes(this.index)) {
      this.chosen = true;
      this.displayIndex = this.tileCollection.indexOf(this.index) + 1;
    }
  }

  interactWithTiles() {
    this.calculateReset();
  }

  ngOnDestroy() {
    this.$gameStateSubscription.unsubscribe();
  }

  private calculateReset() {
    if (this.childScore + 1 === this.tileCollection.indexOf(this.index) + 1) {
      console.log('dont reset');
      this.sendTileState(true);
      this.sendScore(this.childScore + 1);
    } else {
      this.sendTileState(false);
      this.sendScore((this.childScore = 0));
      console.log('reset and send to parent component');
    }
  }

  private sendTileState(input: boolean) {
    if (input) {
      this.correctTile = false;
    }
    this.returnedValue.emit(input);
  }

  private sendScore(input: number) {
    this.sendScoreToParent.emit(input);
  }
}
