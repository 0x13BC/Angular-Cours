
import { Routes } from '@angular/router';

import { HomeComponent } from './other/home/home.component';

import { ListEventComponent } from './event/list-event/list-event.component';
import { LoginComponent } from './auth/login/login.component';
import { EditComponent } from './user/edit/edit.component';
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
        ],
    },
    { path: 'notfound', component: NotFoundComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'notfound' }
];