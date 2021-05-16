import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [AppComponent, GridComponent, TileComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
