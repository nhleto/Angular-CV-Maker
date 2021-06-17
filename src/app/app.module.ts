import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {GridComponent} from './grid/grid.component';
import {TileComponent} from './tile/tile.component';
import {HeaderComponent} from './header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, GridComponent, TileComponent, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatGridListModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
