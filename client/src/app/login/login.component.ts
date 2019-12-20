import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  user: User;
  userSubscription;

  constructor(private http: HttpService, public userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.user.subscribe(
      (data:any) => {
        this.user = data;
      }
    )
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  setToken(token: string) {
    localStorage.setItem('roose-token', JSON.stringify(token))
  }

  loginUser(email, password) {
    this.http.loginUser(email, password).subscribe(
      (data: {
        login: boolean,
        token: string,
        user: User
      }) => {
        console.log(data)
        this.setToken(data.token)
        this.userService.user.next(data.user)
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  showUser() {
    console.log(this.user)
    // console.log(this.userService.user.getValue())
  }

  testUserLogin() {
    this.loginUser('test@gmail.com', 'test')
  }

  logOutUser() {
    this.userService.logOutUser();
  }
}
