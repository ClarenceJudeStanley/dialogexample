import {Component, OnDestroy, OnInit} from '@angular/core';
import {JokeService} from '../../services/joke.service';
import {Observable} from 'rxjs';
import {Joke} from './joke-model';
import {Router} from '@angular/router';
import {Cohort} from '../academy/cohort.model';

@Component({
  selector : 'joke-page',
  templateUrl : './joke-page.html',
  // styleUrls : ['./.'],


})
export class JokePage implements OnInit, OnDestroy {

  joke$ : Observable<Joke>;

  constructor(private jokeService : JokeService, private router: Router){
    this.joke$ = this.jokeService.findJoke();
    // this.joke$.subscribe(data=>{
    //   console.log(data)
    // })
    console.log("constructor is running")
  }
  goToNextPage(){
    this.router.navigate(['/academy/apprentices/:']);
  }

  ngOnDestroy(): void {
    console.log("destroying")
  }

  ngOnInit(): void {
    console.log("initiating")
  }
  view(cohort: Cohort): void {
    this.router.navigate(['/academy/cohorts',new Date()]);
  }

}



