import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  setAuthorization() {
    const token = JSON.parse(localStorage.getItem('roose-token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return { headers };
  }

  getParks() {
    return this._http.get('/api/park/all');
  }

  loginUser(email, password) {
    return this._http.post('/api/user/login', { email, password })
  }

  signupUser(firstname, lastname, email, password) {
    return this._http.post('/api/user/signup', { firstname, lastname, email, password })
  }

  checkAuth() {
    return this._http.get('/api/user/checkauth', this.setAuthorization())
  }

  explorePark(id) {
    return this._http.get(`/api/park/explore/${id}`)
  }

  getUserProfile(id) {
    return this._http.get('/api/trip/profile', this.setAuthorization())
  }
}
