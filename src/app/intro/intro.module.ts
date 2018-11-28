import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CurrencyMaskModule
  ],
  declarations: [
    IntroComponent,
    ThankYouComponent,
    QuestionsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroModule { }
