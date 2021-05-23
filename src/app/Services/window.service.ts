// import { Injectable } from '@angular/core';
// import {BehaviorSubject, Observable} from "rxjs";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class WindowService {
//   height$: Observable<number>
//   width$: Observable<number>
//
//   hello:string = 'hello'
//
//   constructor() {
//     let windowSize$ = new BehaviorSubject(this.getWindowSize())
//     this.height$ = windowSize$.map( x => x.height)
//   }
//
//   private getWindowSize() {
//     return undefined;
//   }
// }
