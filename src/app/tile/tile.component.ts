import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WindowService} from "../Services/window.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnDestroy {
  @Input() Index!: number;
  width = 0
  height = 0
  resizeSubscription$!: Subscription
  tile = document.querySelector('#tile')

  constructor(private windowResize: WindowService) { }

  ngOnInit(): void {
    console.log(this.tile)
  }

  ngOnDestroy() {
    // this.resizeSubscription$.unsubscribe()
  }

}
