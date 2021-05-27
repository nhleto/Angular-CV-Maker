import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WindowService} from "../Services/window.service";
import {Subscription} from "rxjs";
import {ITile} from "../Models/ITile";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnDestroy, ITile {
  @Input() index!: number;
  @Input() chosen!: boolean;
  width = 0
  height = 0
  resizeSubscription$!: Subscription
  tile = document.querySelector('#tile')
  text!: string;

  constructor(private windowResize: WindowService) {
  }

  ngOnInit(): void {
    this.text = this.index.toString()
  }

  ngOnDestroy() {
    // this.resizeSubscription$.unsubscribe()
  }

}
