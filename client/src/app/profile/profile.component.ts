import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  userSubscription;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.user.subscribe(
      (data: User) => {
        this.user = data;
        
      }
    )
  }

  logoutUser() {
    this.userService.logOutUser();
  }

}
