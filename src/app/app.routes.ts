
import { Routes } from '@angular/router';

import { HomeComponent } from './other/home/home.component';

import { ListEventComponent } from './event/list-event/list-event.component';
import { LoginComponent } from './auth/login/login.component';
import { EditComponent } from './user/edit/edit.component';



export const routes: Routes = [
    {
        path: 'events',
        children: [
            { path: 'list', component: ListEventComponent },
            //{ path: '/edit:id', component: EditEventComponent },
        ],
    },
    { path: 'home', component: HomeComponent },
    //{ path: 'events/list', component: ListEventComponent },
    { path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
        ],
    },
    { path: 'user/edit', component: EditComponent }
];