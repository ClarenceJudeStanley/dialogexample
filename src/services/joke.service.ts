import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprentice} from '../app/academy/apprentice.model';
import {Cohort} from '../app/academy/cohort.model';
import {Joke} from '../app/joke/joke-model';

@Injectable()
export class JokeService {

  constructor(private http: HttpClient) {
  }

  findJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }
}

