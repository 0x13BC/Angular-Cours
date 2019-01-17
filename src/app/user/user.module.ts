import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [EditComponent, SignupComponent],
  imports: [FormsModule,CommonModule,MaterialModule
  ],
  exports: [],
  providers: [],
})
export class UserModule { }
