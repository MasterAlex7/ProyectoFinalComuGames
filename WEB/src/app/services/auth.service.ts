import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API, API_LOGIN, API_REGISTER } from './../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(strUsername: string, strPassword: string) {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const params = JSON.stringify({strUsername: strUsername, strPassword: strPassword});
    return this.http.post(API_LOGIN, params, {headers: httpHeaders});
  }

  registrar(strUsername: string, strPassword: string) {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const params = JSON.stringify({strUsername: strUsername, strPassword: strPassword});
    return this.http.post(API_REGISTER, params, {headers: httpHeaders});
  }
}
