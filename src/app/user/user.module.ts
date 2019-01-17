import { NgModule } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { SignupComponent } from './signup/signup.component';
import { MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [EditComponent, SignupComponent],
  imports: [FormsModule,MatMenuModule,MaterialModule
  ]
})
export class UserModule { }
