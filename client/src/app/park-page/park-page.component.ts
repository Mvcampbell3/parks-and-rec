import { Component, OnInit } from '@angular/core';
import { Park } from '../models/park';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-park-page',
  templateUrl: './park-page.component.html',
  styleUrls: ['./park-page.component.scss']
})
export class ParkPageComponent implements OnInit {

  parks: Park[] = [];

  constructor(private http: HttpService, public userService: UserService) { }

  ngOnInit() {
    this.getParks()
    // console.log(this.userService.user)
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

}
