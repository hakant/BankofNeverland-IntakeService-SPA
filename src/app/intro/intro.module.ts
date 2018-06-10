import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';


@NgModule({
  imports: [
    CommonModule,
    IntroRoutingModule,
    MatButtonModule
  ],
  declarations: [
    IntroComponent
  ]
})
export class IntroModule { }
