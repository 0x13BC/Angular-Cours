import { NgModule } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { UserService } from '../services/user.services';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EditComponent, SignupComponent, ListComponent],
  imports: [FormsModule,MaterialModule, HttpClientModule,CommonModule
  ],
  exports: [],

  //Services
  providers: [
    {provide: UserService,useClass: UserService}// On peut mettre une autre classe en retour Si j'ai ça renvoie moi autre chose
  ],
})
export class UserModule { }
