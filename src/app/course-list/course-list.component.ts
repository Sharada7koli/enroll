// course-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../course.service';
import { EnrollmentComponent } from '../enrollment/enrollment.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  selectedCourse: any; // Initialize as null

  showCourseDetails(course: any) {
    this.selectedCourse = course;
  }

  constructor(private courseService: CourseService,private router: Router,private dialog: MatDialog ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }
  addEnroll() {
   
    //this.router.navigate(['/enroll']);
    const dialogRef = this.dialog.open(EnrollmentComponent);
  }

  onEnroll(){
    this.router.navigate(['']);
    }
  }
