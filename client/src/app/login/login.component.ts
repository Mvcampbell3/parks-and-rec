import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = 'test@gmail.com';
  password: string = 'test';

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.checkToken()
    // this.loginUser(this.email, this.password)
  }

  checkToken() {
    const token = JSON.parse(localStorage.getItem('roose-token'));
    if (token) {
      // return console.log('token exists');
      this.http.checkAuth().subscribe(
        (data: any) => {
          console.log(data)
        },
        (err: any) => {
          console.log(err)
        }
      )
    } else {
      return console.log('no token')
    }
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
}
