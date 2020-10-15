import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  
  constructor(private http: HttpClient) {}

  addUser (name, room, password) {
    let headers = new HttpHeaders();
    headers = headers.set("content-type", "application/json");

    let bodyPost : any = JSON.stringify({
        name: name,
        room: room,
        password: password
    });

    let ls : any = JSON.stringify({
      name: name,
      room: room
    });

    localStorage.setItem('CurrentUser', ls);
    return this.http.post<any>( environment.API, bodyPost, {headers}).toPromise();
  }

  authenticate (name, password) {
    let headers = new HttpHeaders();
    headers = headers.set("content-type", "application/json");

    let authentic = JSON.stringify({
      name: name,
      password: password
    })
    return this.http.post<any>( environment.API + "user", authentic, {headers} ).toPromise();
  }

  addMessage (msgData) {
    let headers = new HttpHeaders();
    headers = headers.set("content-type", "application/json");

    this.http.post<any>( environment.API + "message", msgData, {headers}).toPromise();
  }

}