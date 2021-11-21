import { Component, OnInit } from '@angular/core';
import{LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  constructor(private loginservice: LoginServiceService) { }
  // abc(){
  //   this.loginservice.sampleApi().subscribe((res)=>{
  //     console.log(res)
  //   })
  // }

  ngOnInit(): void {
    // this.abc()
  }

}
