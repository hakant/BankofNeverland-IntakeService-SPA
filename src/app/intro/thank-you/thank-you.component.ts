import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  template: `
    <app-intro>
      <div class="highlights">
        <p>Thanks a lot! Don't call us we'll call you.</p>
      </div>
    </app-intro>
  `,
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
