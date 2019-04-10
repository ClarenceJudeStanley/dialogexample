import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app/user/user-model';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  findUsers(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  findUserById(id:string): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id);
  }
}





