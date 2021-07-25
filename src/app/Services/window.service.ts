import { Injectable } from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  resizeObservable$!: Observable<Event>
  width!: number;
  height!: number;
  constructor() { }

  windowObs(): Observable<any>{
    return this.resizeObservable$ = fromEvent(window, 'resize')
  }

  test = (evt: any) => {
    this.width = evt.target.innerWidth
    this.height = evt.target.innerHeight
  }
}
