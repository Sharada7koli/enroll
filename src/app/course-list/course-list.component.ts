import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../course.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; 
import { EnrollmentComponent } from '../enrollment/enrollment.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course | null = null; 
  searchQuery: string = '';
  filteredCourses: Course[] = [];
  courseNotFound: boolean = false;

  constructor(private courseService: CourseService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      this.filteredCourses = [...courses]; // Initialize filteredCourses with all courses initially
    });
  }

  showCourseDetails(course: Course): void {
    this.selectedCourse = course;
  }

  addEnroll(): void {
    this.router.navigate(['/enrollment']);
  }

  onEnroll(): void {
    this.router.navigate(['']); 
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.courseNotFound = this.filteredCourses.length === 0;
  }
}
