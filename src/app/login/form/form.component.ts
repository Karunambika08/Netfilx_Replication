import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup ,Validators,FormControl,FormBuilder } from '@angular/forms';

import {Router} from '@angular/router';
import{LoginServiceService} from '../login-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title='Sign In';
  email='';
  password='';
  status='';
  public userinfo:any=[];
  
  constructor(private _router: Router,
      private loginservice: LoginServiceService,
      private formBuilder: FormBuilder ) { }

      loginDetail:FormGroup
  clickfunc(){
      if(this.email == "abc@gmail.com" && this.password == "123"){
        this.status="Login Successfull";
        this.loginservice.setfun("successful");
        this._router.navigateByUrl('/login/whos-watching');
      }
      else{
        this.status="Login Credentials Mismatched";
        // this.enable=true;
        
      }
    }
  ngOnInit(): void {
    this.loginservice.getdetail().subscribe(data => this.userinfo=data);
    console.log(this.userinfo)


    this.loginDetail =this.formBuilder.group({
        email:['',[Validators.email,Validators.required]],
        password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
      });
  }
}
