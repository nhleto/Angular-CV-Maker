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

  subPub() : Observable<any>{
    return this.resizeObservable$ = fromEvent(window, 'resize')
    // this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    //   this.test(evt)
    // })
  }

  test = (evt: any) => {
    this.width = evt.target.innerWidth
    this.height = evt.target.innerHeight
  }
  //
  // unSub(){
  //   this.resizeSubscription$.unsubscribe()
  // }

}
