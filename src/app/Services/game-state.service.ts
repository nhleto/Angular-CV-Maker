import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private _reset: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public readonly reset: Observable<boolean> = this._reset.asObservable();

  constructor() {
  }

  public resetGameState(input: boolean) {
    this._reset.next(input);
  }
}
