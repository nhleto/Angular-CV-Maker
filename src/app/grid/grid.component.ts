import {Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ITile } from "../Models/ITile";
import { TileComponent } from "../tile/tile.component";
import {from, fromEvent, merge, Observable, of, Subscription} from "rxjs";
import {element} from "protractor";
import {distinctUntilChanged, map} from "rxjs/operators";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  Arr: number[] = [...Array(51).keys()];
  Tiles: ITile[] = [];
  resizeObservable$!: Observable<Event>
  resizeSubscription$!: Subscription
  width: any;
  height: any;

  @ViewChild('tile') tile: any;

  constructor() { }

  ngOnInit(){
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.test(evt)
    })
  }

  test = (evt: any) => {
    this.width = evt.target.innerWidth
    this.height = evt.target.innerHeight
    console.log(this.width, this.height)
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
