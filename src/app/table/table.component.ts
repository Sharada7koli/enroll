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
  editing?: boolean;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  enroll: any[] = [];
  username: any;

  searchText = '';
  

  sortKey: string = '';
  reverse: boolean = false;

  itemsPerPage: number = 5;
  currentPage: number = 1;

  constructor(private fb: FormBuilder, private router: Router, private _dialog: MatDialog, private enService: ServiceService, private http: HttpClient) {}


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

  applyFilter(): Enroll[] {
    const lowerCaseSearch = this.searchText.toLowerCase().trim();
  
    return this.enroll.filter((enrollment) =>
      Object.values(enrollment).some(
        (value) =>
          value && value.toString().toLowerCase().includes(lowerCaseSearch)
      )
    );
  }

  
  setSortKey(key: string) {
    if (this.sortKey === key) {
      this.reverse = !this.reverse;
    } else {
      this.sortKey = key;
      this.reverse = false;
    }

    // After setting the sort key and direction, reapply the filter
    this.enroll = this.applyFilter();

    // Now, apply the sorting logic
    this.enroll.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        // Case-insensitive string comparison
        return this.reverse
          ? valueB.localeCompare(valueA)
          : valueA.localeCompare(valueB);
      } else {
        // Numeric or other types, use direct comparison
        return this.reverse ? valueB - valueA : valueA - valueB;
      }
    });
  }
  
  isSorted(key: string): boolean {
    return this.sortKey === key;
  }

  sortIcon(key: string): string {
    if (this.sortKey === key) {
      return this.reverse ? '▼' : '▲';
    }
    return '';
  }
  
  onPageChanged(page: number): void {
    this.currentPage = page;
  }

  getVisibleItems(): Enroll[] {
  const filteredAndSorted = this.applyFilter();
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return filteredAndSorted.slice(startIndex, endIndex);
}

getTotalPages(): number {
  return Math.ceil(this.applyFilter().length / this.itemsPerPage);
}

}
