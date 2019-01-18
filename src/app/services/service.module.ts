

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './user.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClient,
    HttpClientModule//https://angular.io/api/common/http/HttpClientModule
  ],
  providers: [
    UserService,// On peut mettre une autre classe en retour Si j'ai ça renvoie moi autre chose
  ],
})
export class ServiceModule { }
