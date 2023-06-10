// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RankService {

//   constructor() { }
// }

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http,Response} from '@angular/http';


@Injectable()
export class UserService {

sortedArray: Array <{username: string,total_points: Number}>;
currentUserPosition:Number;
    constructor(private http: Http) {

    }

getUsers(){

   let items: Array <{username: string,total_points: Number}>;

   this.itemRef.on('value',itemSnapshot =>{ // you need to define your item Ref as a global variable in this service
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
    });
     this.sortUsers(items);
  });
}

sortUsers(users) {
    this.sortedArray = users.sort(function(a, b) {
       return b.total_points - a.total_points // descending
       //return a.total_points - b.total_points // accending
    });
}

getUserPosition(user){ 
    this.currentUserPosition = this.sortedArray.map(function (x) { return x.username}).indexOf(user.username);
}

}