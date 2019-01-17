import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventComponent } from './list-event/list-event.component';
import { Routes, RouterModule } from '@angular/router';
import { EditEventComponent } from './edit-event/edit-event.component';

// const routes: Routes = [
//   { path: 'events',
//     children: [
//       { path:'/list', component: ListEventComponent },
//       //{ path: '/edit', component: EditEventComponent },
//     ]
//   }
// ];

@NgModule({
  declarations: [ListEventComponent, EditEventComponent],
  imports: [
    CommonModule,
  ]
})
export class EventModule { }
