import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
    {
        path: 'intro',
        loadChildren: './intro/intro.module#IntroModule'
    },
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    exports: [RouterModule]
})
export class AppRoutingModule { }
