import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // private userService: UserService;

  // constructor(userServices: UserService) { 
  //   this.userService = userServices;
  // }

  constructor(private userService: UserService
    ){

  }

  
  user: User = new User();
  
  emailvalidator: FormControl = new FormControl('',[Validators.required,Validators.email]);
  //let regexp = /^.(?=.*\d)(?=.*[a-z](?=.*[A-Z])(?=.*[^\_da-zA-Z])){6,}."$/; // Contien chiffre minuscule majuscule pas de caractère spéciaux et minimun 6 caractères
  passwordvalidator: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]){6,}.*$/)]);
  matchpasswordvalidator: FormControl = new FormControl('', [Validators.required]);


  checkPasswords(passwordvalidator: FormControl, matchpasswordvalidator: FormControl) { // here we have the 'passwords' group
    let pass = matchpasswordvalidator.value;
    let confirmPass = passwordvalidator.value;

  return pass === confirmPass ? null : { notSame: true }     
}

  ngOnInit() {
    
  }
  onSubmit(a: any, e: any): void {

    
    console.log(this.user);

  }

}

