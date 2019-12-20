import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'client';
  
  user = this.userService.user.subscribe(
    (data:any) => {
      console.log(data)
      console.log('with user service inside of app.component')
      this.user = data;
    }
  );

  constructor(public userService: UserService, private http: HttpService) { }

  ngOnInit() {
    this.userService.checkAuth()
  }

  showUser() {
    console.log(this.user)
  }

}


