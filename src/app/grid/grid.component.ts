import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges, Input
} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ITile } from "../Models/ITile";
import { TileComponent } from "../tile/tile.component";
import {from, fromEvent, merge, Observable, of, Subscription} from "rxjs";
import {element} from "protractor";
import {distinctUntilChanged, map} from "rxjs/operators";
import {WindowService} from "../Services/window.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy, OnChanges {
  @Input() height = this.windowResize.height
  @Input() width = this.windowResize.width

  Arr: number[] = [...Array(51).keys()];
  Tiles: ITile[] = [];
  resizeSubscription$!: Subscription

  constructor(private windowResize: WindowService) { }

  ngOnInit(){
    this.windowResize.subPub()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.height = this.windowResize.height
    this.width = this.windowResize.width
    console.log(this.height, this.width)
    console.log(changes)
  }

  ngOnDestroy() {
    // this.windowResize.unSub()
  }

}
