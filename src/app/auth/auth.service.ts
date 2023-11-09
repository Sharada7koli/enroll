import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public isAuthenticate: boolean = false;
 
  setLoggedIn(value: boolean) {
    this.isAuthenticate = value;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticate;
  }
  logout() {
    this.isAuthenticate = false;
  }
}
