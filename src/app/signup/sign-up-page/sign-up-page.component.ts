import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{LoginServiceService} from '../../login/login-service.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  hideRequiredControl =  new FormControl('false');
  floatLabelControl= new FormControl('English');
  constructor(
      private router:Router,
      private loginservice: LoginServiceService,
      private fb:FormBuilder ) { }
      signupMain: FormGroup=this.fb.group({
        email: this.fb.control('',[Validators.email,Validators.required])
      })
      
      langOptions:FormGroup=this.fb.group({
        hideRequired : this.hideRequiredControl,
        floatLabel:this.floatLabelControl
      })
  onClick() {
    this.router.navigate(["/login"]);
      }
  gotoSignUpForm(){
    this.router.navigate(["/signupform"]);
  }

  ngOnInit(): void {
    console.log('logged in',this.loginservice.getfunc());
  }

}
