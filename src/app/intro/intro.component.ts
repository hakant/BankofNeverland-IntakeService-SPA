import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public goalHorizonYearOptions: Array<number>;

  constructor() {
    const nextYear = (new Date()).getFullYear() + 1;
    this.goalHorizonYearOptions = Array.from({ length: 50 }, (x, y) => y + nextYear);
  }

  ngOnInit() {
  }

}
