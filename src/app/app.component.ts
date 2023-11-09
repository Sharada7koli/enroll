import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enrollment Application';
  constructor(private authServe:AuthService,private _dialog:MatDialog, private keycloakserv:KeycloakService, private route: Router){

  }

  
  alrMsg(){
    alert("Please login before Enrolling");
  }

  isLoggedIn():boolean{
    return this.authServe.isLoggedIn();

  }

  loginWithKeycloak(){
    this.keycloakserv.login();
  }

  logoutWithKeycloak(){
    this.keycloakserv.logout();
  }

  ngOnInit() {
    this.keycloakserv.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.route.navigate(['/enrollment']);
      }
    });
  // addEnroll() {
   
  //   // this.router.navigate(['/enroll']);
  //   this._dialog.open(EnrollmentComponent)
  // }

  
}

}
