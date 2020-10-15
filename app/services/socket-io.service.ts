import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import * as io from "socket.io-client";


@Injectable({
  providedIn: 'root'
})

export class SocketService {
  
  socket: any;
  readonly url: string = `${environment.SOCKET}`;

  constructor() {
      this.socket = io(`${this.url}`);
  }

  listen(eventName: string) {
    return new Observable((subscribe) => {
        this.socket.on(eventName, (data) => {
            subscribe.next(data);
        })
    });
  }
  
  emit(eventName: string, data: any) {
      this.socket.emit(eventName, data);
  }
}