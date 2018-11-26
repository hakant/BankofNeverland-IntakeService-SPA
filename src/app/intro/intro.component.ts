import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public goalHorizonYearOptions: Array<number>;
  intakeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    initialDeposit: ['', Validators.required],
    horizonMonth: ['', Validators.required],
    horizonYear: ['', Validators.required],
    goalAmount: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
    const nextYear = (new Date()).getFullYear() + 1;
    this.goalHorizonYearOptions = Array.from({ length: 30 }, (x, y) => y + nextYear);
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.intakeForm.value);
    this.router.navigate(['intro/thank-you']);
  }

}
