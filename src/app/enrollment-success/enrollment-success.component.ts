import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment-success',
  templateUrl: './enrollment-success.component.html',
  styleUrls: ['./enrollment-success.component.css']
})
export class EnrollmentSuccessComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private router:Router) {}

  onClick(){
    this.router.navigate(['/table']);
  }
}
