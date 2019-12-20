import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  user: any;

  constructor(private http: HttpService, public userService: UserService) { }

  ngOnInit() {
    // this.testUserLogin()
    this.userService.user.subscribe(
      (data:any) => {
        this.user = data;
      }
    )
  }

  setToken(token: string) {
    localStorage.setItem('roose-token', JSON.stringify(token))
  }

  loginUser(email, password) {
    this.http.loginUser(email, password).subscribe(
      (data: {
        login: boolean,
        token: string
      }) => {
        console.log(data)
        this.setToken(data.token)
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  showUser() {
    console.log(this.user)
  }

  testUserLogin() {
    this.loginUser('test@gmail.com', 'test')
  }
}
