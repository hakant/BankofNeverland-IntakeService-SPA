import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
    {
        path: 'questions',
        component: QuestionsComponent
    },
    {
        path: 'thankyou',
        component: ThankYouComponent
    },
    {
        path: '',
        redirectTo: 'questions',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntroRoutingModule { }
