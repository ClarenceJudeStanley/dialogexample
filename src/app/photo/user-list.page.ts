import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'photo-app',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss']


})
export class UserListPage implements OnInit{
  title = 'UserListPage';

  constructor(){
    console.log("constructor is running")
  }

  ngOnInit(): void {
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
