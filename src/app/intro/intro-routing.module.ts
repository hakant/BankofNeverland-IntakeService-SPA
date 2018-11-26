import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
    {
        path: '',
        component: IntroComponent
    },
    {
        path: 'thank-you',
        component: ThankYouComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntroRoutingModule { }
