import { Component } from '@angular/core';

export interface BlogPost {
  title: string;
  content: string;
  date: Date;
  author: string;
  courseId: number;
  time: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
applicationStatus: any;
getCourseDescriptionById(arg0: number) {
throw new Error('Method not implemented.');
}

  selectedCourseId: number | null = null;
  blogPosts: BlogPost[] = [
    {
      title: 'The Evolution of Software Development',
      content: 'In the fast-paced world of technology, software development undergoes constant changes. Explore how software developers play a crucial role in building innovative applications.',
      date: new Date('2023-03-15'),
      author: 'John Doe',
      courseId: 1,
      time: '10:00 AM - 12:00 PM',
      image: 'assets/images/software development.jpg'
    },
    {
      title: 'Exploring Foundations of Networking',
      content: 'Every organization relies on a well-maintained computer network. Discover the essentials of networking and the top IT certifications for hardware and network professionals.',
      date: new Date('2023-03-20'),
      author: 'Jane Smith',
      courseId: 2,
      time: '2:00 PM - 4:00 PM',
      image: 'assets/images/networking.jpg'
    },
    {
      title: 'Demystifying Cloud Computing',
      content: 'Delve into the world of cloud computing and its impact on businesses. Understand how cloud technology enables collaboration and flexibility in application development.',
      date: new Date('2023-03-25'),
      author: 'Alex Johnson',
      courseId: 3,// Associated with Cloud Computing course
      time: '2:00 PM - 4:00 PM',
      image: 'assets/images/cloud Computing.jpg'
    },
    {
      title: 'Unleashing the Business Intelligence',
      content: 'You don\'t need to be a data scientist to harness the power of data. Learn how professionals in Business Intelligence (BI) contribute to maximizing data usage in organizations.',
      date: new Date('2023-04-01'),
      author: 'Emily Davis',
      courseId: 4,
      time: '2:00 PM - 4:00 PM',
      image: 'assets/images/BI.jpg' // Associated with Business Intelligence course
    },
    {
      title: 'The Rise of AI and Machine Learning',
      content: 'AI and Machine Learning are reshaping industries. Explore the hottest trends, applications, and career paths in the dynamic field of Artificial Intelligence and Machine Learning.',
      date: new Date('2023-04-05'),
      author: 'Chris Williams',
      courseId: 5,
      time: '2:00 PM - 4:00 PM',
      image: 'assets/images/AI.jpg' // Associated with AI and Machine Learning course
    },
  ];
  showCourseDetails(courseId: number): void {
    this.selectedCourseId = courseId;
  }

}
 