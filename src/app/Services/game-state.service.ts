import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GameStateService {
    reset!: boolean;
    gameStateObservable!: Observable<Event>;

    constructor() {}

    public resetGameState(input: boolean) {
        this.reset = input;
        console.log(`we are in the gameState service. Reset value is: ${this.reset}`)
    }
}
