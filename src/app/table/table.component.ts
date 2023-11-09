import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';

interface Enroll {
  username: string;
  email: string;
  phone: string;
  topic: string;
  timepreference: string;
  actions: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private _dialog: MatDialog, private enService: ServiceService, private http: HttpClient) {}

  enroll: any[] = [];
  username: any;

  ngOnInit(): void {
    this.enService.getUser().subscribe((data: any) => {
      this.enroll = data;
    });
  }

  editEnrollment(enrollment: any) {
    enrollment.editing = true;
  }

  saveEnrollment(enrollment: any) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponentComponent, {
      data: 'Are you sure to save the data?',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.put('http://localhost:8081/api/enroll/' + enrollment.email, enrollment)
          .subscribe(
            (response: any) => {
              console.log('Enrollment updated successfully:', response);
            },
            (error) => {
              console.error('Error updating enrollment:', error);
            }
          );
  
        enrollment.editing = false; 
      }
    });
  }

  cancelEdit(enrollment: any) {
    enrollment.editing = false;
  }

  deleteEnrollment(email: string): void {
    const dialogRef = this._dialog.open(ConfirmationDialogComponentComponent, {
      data: 'Are you sure to delete the data?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.enService.deleteEnrollment(email).subscribe(
          () => {
            console.log('Enrollment deleted successfully');
            this.enroll = this.enroll.filter((enrollment) => enrollment.email !== email);
          },
          (error) => {
            console.error('Error deleting enrollment:', error);
          }
        );
      }
    });
  }
}
