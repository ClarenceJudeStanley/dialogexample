import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Joke} from './joke-model';
import {Observable} from 'rxjs';
import {JokeService} from '../../services/joke.service';
@Component ( {
  selector: 'trg-joke',
  templateUrl: './joke-page.component.html'
})
export class JokePageComponent implements OnInit, OnDestroy {


  joke$: Observable<Joke>;
  constructor (private jokeService: JokeService,private router: Router){
    this.joke$ = this.jokeService.findJoke();
    console.log("Constructor running...")
  }

  goToNextPage(){
    this.router.navigate(['/academy/apprentices/', new Date().getTime()]);

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is running...")
  }

  ngOnInit(): void {

    console.log("ngOnInit is running...")
  }

}





