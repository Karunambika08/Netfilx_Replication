import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private userservice : UsersService,

  ) { }
  addMember: FormGroup=this.fb.group({
    nickname: this.fb.control('',Validators.required),
  })
   users: any;
  ngOnInit(): void {
    this.users = this.userservice.getusers();
    console.log(this.users)
    console.log("HI")

  }

}
