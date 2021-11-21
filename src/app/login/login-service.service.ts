import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sample, user } from '../userinfo'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  var = 'hello';
  getfunc() {
    return this.var; 
  }
  public userDetail!: any[]; 
  setUser(a:any){
    this.userDetail.push()
  }

  setfun(a:any){
    
  }

  constructor(private http:HttpClient) { }
  getservice():Observable<sample[]> {
    
    return this.http.get<sample[]>("https://www.anapioficeandfire.com/api/characters");
  }


  private _url :string= "./assets/data/userData.json";

  getdetail():Observable<user[]>
  {
  
    return this.http.get<user[]>(this._url);
  }
}
  
