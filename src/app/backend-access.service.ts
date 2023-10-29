import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  contactList : any = [];

  userList : any =[];
  expresponse : string = "";
  constructor(private http: HttpClient){

  }
  getAllUsers() {
    this.http.get('http://localhost:9901/getAll').subscribe((response)=>{
      this.userList= response;
      console.log(this.userList);
      
    });
    return this.userList;
  }
  addUser(udata : any) : any
  {
   // console.log("user data", udata);
   // console.log(udata.value);
    //this.userList.push(udata.value);
    this.http.post('http://localhost:9000/insertUser',udata.value).subscribe((response)=>{
      this.expresponse  = response.toString();
      this.getAllUsers();
    });
    return this.expresponse;
  }

  getAllContacts(){
    this.http.get('http://localhost:9901/getAllContact').subscribe((response) => {
      this.contactList = response;
    })
  }
  addContact(form : NgForm){
    this.http.post('http://localhost:9901/insertContact', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })

  }
  updateContact(form : NgForm){
    this.http.put('http://localhost:9901/updateContact', form.value ).subscribe((response) => {
      this.expresponse = response.toString();
    })
  }
  
}
