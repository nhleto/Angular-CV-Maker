import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { GameStateService } from '../Services/game-state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    faCoffee = faCoffee;
    resetGame!: boolean;

    constructor(private gameState: GameStateService) {}

    ngOnInit(): void {}

    reset() {
        console.log("clicked reset in header")
        this.gameState.resetGameState(true);
    }
}
