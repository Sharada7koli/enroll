import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';
import { EnrollmentSuccessComponent } from './enrollment-success/enrollment-success.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enrollment Application';
  user: any;
  isUserLoggedIn: boolean = false;
  constructor(private authServe:AuthService,private _dialog:MatDialog, private keycloakserv:KeycloakService, private route: Router){

  }

  
  alrMsg() {
    if (!this.isUserLoggedIn) {
      const dialogRef = this._dialog.open(ConfirmationDialogComponentComponent, {
        data: 'Please login before Enrolling',
      });
    }
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
      this.isUserLoggedIn = isLoggedIn;
  
      if (isLoggedIn) {
        this.route.navigate(['/home']);
        this.keycloakserv.loadUserProfile().then((profile) => {
          this.user = {
            username: profile.username
          };
          console.log('User is logged in:', this.user.username);
        });
      }
    });
  }
  
  getCurrentDateTime(): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(new Date(), 'short')!;
  }

}



