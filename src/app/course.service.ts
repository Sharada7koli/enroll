// course.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Define the Course type
export interface Course {
  id: number;
  name: string;
  description?: string; // Make description optional
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    { id: 1, name: 'Software Development', description: 'Changes happen at lightning speed in the world today and software must keep up, driving demand for software developers who can build the new apps as needed. Many of the best IT certifications can help you transition into or move up in the software development field.' },
    { id: 2, name: 'Networking', description: 'Every company needs an efficient and well-maintained computer network even in the age of cloud computing. The top IT certifications that can help you move ahead as a hardware and network professional .' },
    { id: 3, name: 'Cloud Computing', description: 'Simply put, cloud computing is computing based on the Internet. Previously, companies had to use software downloaded into a physical computer or server. Cloud computing allows people to work on the same applications through the Internet from different systems and has been widely adopted and is now used at most organizations worldwide' },
    { id: 4, name: 'Business Intelligence', description: 'Not everyone needs to be at the level of a data scientist to help organizations put data to use. Professionals trained in Business Intelligence (BI) can play an important role in maximizing the use of data without requiring the full scope of training needed to be a data scientist' },
    { id: 5, name: 'Artificial Intelligence and Machine Learning', description: 'AI and Machine Learning is the hottest buzzword in tech today, and all the major enterprises are using it to improve business. From voice assistants to drones, AI and Machine Learning are increasingly finding applications in our day-to-day lives and are creating jobs across sectors and giving rise to new career paths.' },
  ];

  constructor() {}

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}
