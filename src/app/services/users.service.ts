import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getusers(){
    const users =[
      {userId:20 ,username:'Youtube'},
      {userId:21 ,username:'Whatsapp'},
      {userId:22 ,username:'Kavi'},


      {"id":1 ,"email":"spkavina@gmail.com","password":"12345678"},
    {"id":2 ,"email":"abc@yahoo.com","password":"12345678"},
    ];

    return users;
  }
}
