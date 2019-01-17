import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventComponent } from './list-event/list-event.component';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: 'events',
//     children: [
//       { path:'/list', component: ListEventComponent },
//       //{ path: '/edit', component: EditEventComponent },
//     ]
//   }
// ];

@NgModule({
  declarations: [ListEventComponent],
  imports: [
    CommonModule,
  ]
})
export class EventModule { }
