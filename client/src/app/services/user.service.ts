import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, BehaviorSubject } from 'rxjs'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // user: User;
  loggedIn: boolean = false;
  user = new BehaviorSubject<User>({
    firstname: '',
    lastname: '',
    email: '',
    id: '',
    iat: '',
    exp: ''
  })

  constructor(private http: HttpService) { }

  checkAuth() {
    const token = JSON.parse(localStorage.getItem('roose-token'));
    if (token) {
      this.http.checkAuth().subscribe(
        (data: any) => {
          console.log(data)
          this.user.next(data.user)
        },
        (err: any) => {
          console.log(err)
          this.user.next({
            firstname: '',
            lastname: '',
            email: '',
            id: '',
            iat: '',
            exp: ''
          })
        }
      )
    } else {
      console.log('no token')
    }
  }

  sanitizeUser() {
    this.user.next({
      firstname: '',
      lastname: '',
      email: '',
      id: '',
      iat: '',
      exp: ''
    })

    localStorage.removeItem('roose-token')
  }
}


