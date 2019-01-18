
import { Routes } from '@angular/router';

import { HomeComponent } from './other/home/home.component';



import { ListEventComponent } from './event/list-event/list-event.component';

import { LoginComponent } from './auth/login/login.component';

import { SignupComponent } from './user/signup/signup.component';
import { EditComponent } from './user/edit/edit.component';
import { ListComponent } from './user/list/list.component';

import { NotFoundComponent } from './other/not-found/not-found.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'events',
        children: [
            { path: 'list', component: ListEventComponent },
            //{ path: '/edit:id', component: EditEventComponent },
        ],
    },
    //{ path: 'events/list', component: ListEventComponent },
    { path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
        ],
    },
    {
        path: 'user',
        children: [
            {path:'edit', component: EditComponent },
            { path: 'signup', component: SignupComponent },
            {path: 'list',component:ListComponent},
        ],
    },
    { path: 'notfound', component: NotFoundComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'notfound' }
];