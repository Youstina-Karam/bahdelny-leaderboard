import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  players = [
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 200 },
    { name: 'Player 3', score: 150 },
    // Add more players as needed
  ];
}
