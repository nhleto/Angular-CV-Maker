import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private _reset: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly reset: Observable<boolean> = this._reset.asObservable();
  private _chosenTiles: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly chosenTiles: Observable<number[]> = this._chosenTiles.asObservable();

  constructor() {
  }

  public resetGameState(input: boolean) {
    this._reset.next(input);
  }

  public seedTiles(): number[] {
    return [...Array(75).keys()];
  }
}
