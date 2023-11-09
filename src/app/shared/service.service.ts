import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url='http://localhost:8081';
  private apiUrl = 'http://localhost:8081/api/enroll';
  constructor(private http:HttpClient){}

  getUser( ){
    console.log('url working',this.url)
    return this.http.get(`${this.url}/api/enroll`)
   
  }

  addEnrolls(Users:User[]){
    console.log('--enroll-service--',Users);
    return this.http.post(`${this.url}/api/enroll`,Users);
   }

   getEnrollments() {
    return this.http.get('/api/enroll');
  }

  updateEnrollment(email: string, updatedData: any) {
    return this.http.put(`/api/enroll/${updatedData.email}`, updatedData);
  }

  deleteEnrollment(email: string) {
    return this.http.delete(`${this.apiUrl}/${email}`);
  }

   
}
