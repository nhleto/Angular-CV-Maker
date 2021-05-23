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
export class GridComponent implements OnInit, OnDestroy {
  Arr: number[] = [...Array(51).keys()];
  Tiles: ITile[] = [];
  resizeSubscription$!: Subscription
  height!: number;
  width!: number;

  constructor(private windowResize: WindowService) { }

  ngOnInit(){
    this.resizeSubscription$ = this.windowResize.subPub().subscribe(
      ((size) => {
        this.height = size.target.innerHeight;
        this.width = size.target.innerWidth;
        console.log(this.width, this.height);
      })
    )
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
