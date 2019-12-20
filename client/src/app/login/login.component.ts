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
  firstname: string;
  lastname: string;

  user: User;
  userSubscription;

  showSignup: boolean = false;

  constructor(private http: HttpService, public userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.user.subscribe(
      (data: any) => {
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

  signupUser(firstname, lastname, email, password) {
    this.http.signupUser(firstname, lastname, email, password).subscribe(
      (data: any) => {
        console.log(data)
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

  loginButtonHandle() {
    if (this.email && this.password) {
      return this.loginUser(this.email, this.password)
    }
    return console.log('missing email and/or password')
  }

  signupButtonHandle() {
    if (this.firstname, this.lastname, this.email, this.password) {
      return this.signupUser(this.firstname, this.lastname, this.email, this.password)
    }
    return console.log('missing firstname, lastname, email, and/or password')
  }

  switchSignup() {
    const sliders = [].slice.call(document.querySelectorAll('.sliders'));

    switch (this.showSignup) {
      case false:
        console.log('this is false');
        this.showSignup = true;
        sliders.forEach(slider => slider.classList = 'input-group slider slide-down')
        break;
      case true:
        console.log('this is true');
        sliders.forEach(slider => slider.classList = 'input-group slider slide-up');
        setTimeout(() => {
          this.showSignup = false;
          console.log('timeout ran')
        }, 300)
        break;
      default:
        console.log('switch login box not working as expected')
    }
  }
}
