import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import{LoginServiceService} from '../../login/login-service.service';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit {
  genders =['male','female','Rather not say']
  constructor(
    private fb:FormBuilder,
    private loginservice: LoginServiceService  
    ) { }
  
  signupDetail : FormGroup = this.fb.group({
    nickname  :this.fb.control('',[Validators.required,Validators.maxLength(10)]),
    email :this.fb.control('',[Validators.email,Validators.required]),
    bday  :this.fb.control('',[Validators.required]),
    tel   :this.fb.control('',[Validators.required]),
    gender:this.fb.control('',[Validators.required])  
  })
  ngOnInit(): void {
    this.loginservice.getservice().subscribe((res) =>{
      console.log(res)
  })
  }
  goToLogin(){
    console.log("Sign up" ,this.signupDetail.value );
    this.loginservice.setUser(this.signupDetail.value);
    
  }
  public control(email:string){
    return this.signupDetail.get(email)
  }
}
