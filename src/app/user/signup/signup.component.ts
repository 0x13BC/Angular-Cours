import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    
  }
  onSubmit(a: any, e: any): void {
    console.log(a);
  }

}

