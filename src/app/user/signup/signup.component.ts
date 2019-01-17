import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor() { }

  emailvalidator: FormControl = new FormControl('',[Validators.required,Validators.email]);

  ngOnInit() {
    
  }
  onSubmit(a: any, e: any): void {
    console.log(a);
  }

}

