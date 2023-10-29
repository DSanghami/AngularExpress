import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService2 {
  private baseUrl = 'http://localhost:9901';
 
  constructor(private http: HttpClient) {}
 
  login(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/validateLogin`);
  }
}