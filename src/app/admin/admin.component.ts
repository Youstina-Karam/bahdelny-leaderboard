import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  newPlayer = {
    name: '',
    score: 0,
  };

  players = [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 200 },
    { name: 'Player 3', score: 150 },
    // Existing players
  ];

  addPlayer() {
    this.players.push({ name: this.newPlayer.name, score: this.newPlayer.score });
    this.newPlayer.name = '';
    this.newPlayer.score = 0;
  }
}
