import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IntakeService } from '../shared/intake.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [IntakeService]
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
    private activatedRoute: ActivatedRoute,
    private intakeService: IntakeService
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
    this.intakeService
      .send(this.intakeForm.value)
      .subscribe();

    this.router.navigate(
      ['thankyou'],
      { relativeTo: this.activatedRoute.parent }
    );
  }
}
