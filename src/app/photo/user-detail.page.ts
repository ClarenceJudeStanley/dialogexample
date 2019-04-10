import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {AcademyService} from '../../services/academy.service';
// import {Apprentice} from './apprentice.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user/user-model';
import {UserService} from '../../services/user-service';
@Component({
  selector: 'trg-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss']
})
export class UserDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  user$: Observable<User> = null;

  constructor(private form: FormBuilder,
              private route : ActivatedRoute,
              private userService: UserService) {

    this.route.params.subscribe(
      (param : {id : string})=>{
        this.user$ = userService.findUserById(param.id)
    })

    // this.mainForm = this.form.group({
    //   code: ['', Validators.required],
    //   name: ['', Validators.minLength(6)],
    //   email: ['', Validators.required],
    // });

  }

  ngOnInit() {
    // this.users$ = this.academyService.findUsersById(100);
    // patch form values
    // this.users$.subscribe(users => this.mainForm.patchValue(users));
  }
   onSubmit(value: any){
   }
}
