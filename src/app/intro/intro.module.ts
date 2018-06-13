import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';


@NgModule({
  imports: [
    CommonModule,
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
    IntroComponent
  ]
})
export class IntroModule { }
