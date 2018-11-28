import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public goalHorizonYearOptions: Array<number>;
  intakeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    initialDeposit: ['', Validators.required],
    horizonMonth: ['', Validators.required],
    horizonYear: ['', Validators.required],
    goalAmount: ['', Validators.required],
    investmentProfile: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const nextYear = (new Date()).getFullYear() + 1;
    this.goalHorizonYearOptions = Array.from(
      { length: 30 },
      (x, y) => y + nextYear
    );
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.intakeForm.value);
    this.router.navigate(
      ['thankyou'],
      { relativeTo: this.activatedRoute.parent }
    );
  }
}
