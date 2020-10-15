import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class DeleteService {

  constructor(private http: HttpClient) { }

  deleteThis(data): any {
    return this.http.delete<any>( environment.BASE_URL + data ).toPromise();
  }

}