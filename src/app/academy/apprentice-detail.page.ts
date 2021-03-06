import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AcademyService} from '../../services/academy.service';
import {Apprentice} from './apprentice.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'trg-apprentice-detail',
  templateUrl: './apprentice-detail.page.html',
  styleUrls: ['./apprentice-detail.page.scss']
})
export class ApprenticeDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  apprentice$: Observable<Apprentice> = null;

  constructor(private form: FormBuilder,
              private route : ActivatedRoute,
              private academyService: AcademyService) {

    this.route.params.subscribe((param: { code: string }) => {
              console.log(param.code)
    });

      this.mainForm = this.form.group({
      code: ['', Validators.required],
      name: ['', Validators.minLength(6)],
      email: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.apprentice$ = this.academyService.findApprenticeById(100);

    // patch form values
    this.apprentice$.subscribe(apprentice => this.mainForm.patchValue(apprentice));
  }

  onSubmit(value: any) {
    console.log(JSON.stringify(value));
    this.submitted = true;
  }
}
