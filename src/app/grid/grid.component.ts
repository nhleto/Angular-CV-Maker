import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Tile } from "../Models/Tile";
import { TileComponent } from "../tile/tile.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit {
  Arr: number[] = [];
  Tiles: Tile[] = [];
  HeightxWidth: Object = {
    height: screen.height,
    widyth: screen.width
  }

  @ViewChild('tile') elementView: ElementRef | undefined;

  ScreenWidth: number = screen.width;

  constructor() { }

  ngOnInit(){
    this.generateArray()
  }

  generateArray() {
    let digit = 71

    for (let i = 1;i < digit; i++){
      this.Arr.push(i)
    }
  }

  ngAfterViewInit() {
    let divToMeasure = this.elementView?.nativeElement.offSetWdith;
    console.log(divToMeasure);
  }

  calculateNumberOfTiles(){
    this.ScreenWidth
  }
}
