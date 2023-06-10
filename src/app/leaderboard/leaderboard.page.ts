import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  items: any[];

  constructor() { }

  ngOnInit(): void {
    this.itemRef.orderByChild("total_points").on('value',itemSnapshot =>{
      this.items = [];
      itemSnapshot.forEach( itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
      var j = 0;
      this.items.reverse().forEach(i=>{
        j++;
        if (new String(i.username).valueOf() == new String(this.username).valueOf()){
          console.log("Trovato")
          this.position = j;
        }
      })

      return this.items; 
    });
  }
}
