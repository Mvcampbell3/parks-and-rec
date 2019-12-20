import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'client';

  user: User;

  constructor(public userService: UserService, private http: HttpService) { }

  ngOnInit() {
    this.userService.checkAuth()
    this.userService.user.subscribe(
      (data: User) => {
        this.user = data;
      }
    )
  }

  showUser() {
    console.log(this.user)
  }

}


