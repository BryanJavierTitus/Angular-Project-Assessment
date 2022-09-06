import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('assets/users.json').toPromise().then(res => <User[]>res).then(data => { return data; });
  }

  
  
}
