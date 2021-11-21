import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-whos-watching',
  templateUrl: './whos-watching.component.html',
  styleUrls: ['./whos-watching.component.css']
})
export class WhosWatchingComponent implements OnInit {

  constructor(private route:Router) { }
  clickfunc()
    {
      this.route.navigate(['/home']);
    }
    // addfunc(){
    //   this.route.navigateByUrl('/extra')
    // }
  
  ngOnInit(): void {
  }

}
