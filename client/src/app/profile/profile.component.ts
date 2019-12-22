import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HttpService } from '../services/http.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loaded: boolean = false;
  user: User;
  userSubscription = this.userService.user.subscribe(
    (data: User) => {
      this.user = data;
      console.log(data)
      this.getProfileData(data.id)
    }
  );
  profileSubscription;
  trips: Trip[] = [];

  constructor(public userService: UserService, private http: HttpService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logoutUser() {
    this.userService.logOutUser();
  }

  getProfileData(id) {
    this.http.getUserProfile(id).subscribe(
      (data: Trip[]) => {
        console.log(data)
        this.trips = data;
        this.loaded = true;
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  testTrips() {
    console.log(this.trips)
  }

}
