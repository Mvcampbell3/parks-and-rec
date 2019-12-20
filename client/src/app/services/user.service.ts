import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, BehaviorSubject } from 'rxjs'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  emptyUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    id: '',
    iat: '',
    exp: ''
  }

  loggedIn = new BehaviorSubject<boolean>(false);
  user = new BehaviorSubject<User>(this.emptyUser)

  constructor(private http: HttpService) { }

  checkAuth() {
    const token = JSON.parse(localStorage.getItem('roose-token'));
    if (token) {
      this.http.checkAuth().subscribe(
        (data: any) => {
          console.log(data)
          this.user.next(data.user)
          this.loggedIn.next(true);
        },
        (err: any) => {
          console.log(err)
          this.user.next(this.emptyUser);
          localStorage.removeItem('roose-token')
          this.loggedIn.next(false);
        }
      )
    } else {
      console.log('no token')
    }
  }

  logOutUser() {
    this.user.next(this.emptyUser);
    this.loggedIn.next(false);
    localStorage.removeItem('roose-token')
  }

}


