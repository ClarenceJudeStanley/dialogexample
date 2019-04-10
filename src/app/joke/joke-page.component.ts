import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Joke} from './joke-model';
import {JokeService} from '../../services/joke-services';
import {Router} from '@angular/router';
import {Cohort} from '../academy/cohort.model';

@Component ( {
  selector: 'trg-joke',
  templateUrl: './joke-page.component.html'
})
export class JokePage implements OnInit, OnDestroy {


  joke$: Observable<Joke>;

  constructor(private jokeService: JokeService, private router: Router) {
    this.joke$ = this.jokeService.findJoke();
    console.log("Constructor running...")
  }

  goToNextPage() {
    this.router.navigate(['/academy/apprentices/', new Date().getTime()]);

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is running...")
  }

  ngOnInit(): void {

    console.log("ngOnInit is running...")
  }
}







