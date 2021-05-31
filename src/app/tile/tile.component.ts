import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { WindowService } from '../Services/window.service';
import { Subscription } from 'rxjs';
import { ITile } from '../Models/ITile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit, ITile {
  @Input() Index!: number;
  @Input() tileArray!: number[];
  width = 0;
  height = 0;
  resizeSubscription$!: Subscription;
  text!: string;
  chosen!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.text = this.Index.toString();
    this.chosen = this.calcChosen();
  }

  calcChosen(): boolean {
    return this.tileArray.includes(this.Index);
  }
}
