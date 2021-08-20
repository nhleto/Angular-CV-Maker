import { Injectable } from '@angular/core';
import {Observable, Subject, Subscriber} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameStateService {
    reset!: boolean;
    gameStateObservable!: Observable<Event>;
    gameStateSubject!: Subject<any>;

    constructor() {}

    public resetGameState(input: boolean) {
        this.gameStateSubject.next(input);
    }
}
