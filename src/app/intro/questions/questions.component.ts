import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { IntakeService } from '../shared/intake.service';
import { catchError, finalize, filter, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [IntakeService]
})
export class QuestionsComponent {

  public postIntakeInProgress = false;
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
    private snackBar: MatSnackBar,
    private intakeService: IntakeService
  ) {
    const nextYear = (new Date()).getFullYear() + 1;
    this.goalHorizonYearOptions = Array.from(
      { length: 30 },
      (x, y) => y + nextYear
    );
  }

  onSubmit() {
    this.postIntakeInProgress = true;
    this.intakeService
      .postIntake(this.intakeForm.value)
      .pipe(
        catchError(() => {
          this.snackBar.open(
            'Something went wrong. Seems like we can\'t save your data at the moment. ' +
            'Sorry for the inconvenience. Please check your internet connection and try again.',
            'Dismiss', {
              verticalPosition: 'top',
              politeness: 'assertive',
              panelClass: 'snackbar'
            });
          return of(null);
        }),
        filter(res => res !== null),
        finalize(() => this.postIntakeInProgress = false)
      )
      .subscribe(() => {
        this.router.navigate(
          ['thankyou'],
          { relativeTo: this.activatedRoute.parent }
        );
      });
  }
}
