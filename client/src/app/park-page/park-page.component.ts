import { Component, OnInit, OnDestroy } from '@angular/core';
import { Park } from '../models/park';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-park-page',
  templateUrl: './park-page.component.html',
  styleUrls: ['./park-page.component.scss']
})
export class ParkPageComponent implements OnInit {

  parks: Park[] = [];
  user: User;

  userSubscription;

  constructor(private http: HttpService, public userService: UserService) { }

  ngOnInit() {
    this.getParks()
    this.userSubscription = this.userService.user.subscribe(
      (data: User) => {
        this.user = data;
      }
    )
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  getParks() {
    this.http.getParks().subscribe(
      (data: { parks: Park[] }) => {
        this.parks = data.parks;
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  showUser() {
    console.log(this.user)
  }

}
