import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  private baseUrl = 'http://localhost:9901';
 getuserarray:  any=[];
 detailsArray: any = [];
  constructor(private http: HttpClient) {}

  addUser(uData:any):any{
    this.http.post('http://localhost:9901/insert',uData.value).subscribe((res)=>{
       this.getuserarray = res;
       console.log(this.detailsArray);
     // this.expresponse=res.toString();
    });
    return this.addUser;
  }
 
  login(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/validateLogin`);
  }
}