import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
})
export class CoursComponent {
  title: string = 'hey im title';

  courses;
  getTitle() {
    return this.title;
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
