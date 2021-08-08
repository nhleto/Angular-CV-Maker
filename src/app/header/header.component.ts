import {Component, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {GameStateService} from '../Services/game-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;

  constructor(private gameState: GameStateService) {
  }

  ngOnInit(): void {
  }

  reset() {
    this.gameState.resetGameState(true);
  }
}
