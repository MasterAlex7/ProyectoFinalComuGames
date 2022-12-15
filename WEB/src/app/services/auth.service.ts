import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_GET_GETGIVEAWAYS, API_GET_GETFREEGAMES, API_GET_PUBLICACIONES, API_CREAR_PUBLICACION, API_LOGIN, API_REGISTER } from './../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}


  getGetGiveaways(){
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(API_GET_GETGIVEAWAYS, {headers: httpHeaders});
  }

  getGetFreeGames(){
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(API_GET_GETFREEGAMES, {headers: httpHeaders});
  }

  getPublicaciones() {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(API_GET_PUBLICACIONES, {headers: httpHeaders});
  }

  crearPublicacion(strTPubli: string, strTitulo: string, strContenido: string) {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const params = JSON.stringify({strTPubli: strTPubli, strTitulo: strTitulo, strContenido: strContenido});
    return this.http.post(API_CREAR_PUBLICACION, params, {headers: httpHeaders});
  }

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
