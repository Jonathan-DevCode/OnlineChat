import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class GetService {

  static currentRoom = new EventEmitter<string>();
  static buttonEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  getRooms(): any {
    return this.http.get( environment.API ).toPromise();
  }

  getMessage(room): any {
    return this.http.get( environment.API + `message/${room}` ).toPromise();
  }

}