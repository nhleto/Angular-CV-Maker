import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Tile } from "../Models/Tile";
import { TileComponent } from "../tile/tile.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  Arr: number[] = [];
  Tiles: Tile[] = [];
  constructor() { }

  ngOnInit(){
    let digit = 100

    for (let i = 1;i < digit; i++){
      this.Arr.push(i)
    }
  }
}
