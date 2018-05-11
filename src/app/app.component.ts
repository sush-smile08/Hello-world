import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    tittle: "Tittle",
    isFavorite: true
  }
  title = 'Angular App';

  books = [1, 2];
  courses =[];
  viewMode ='map';
  course;
  loadCourses(){
  this.course = [
    { id:1, name: ('course1')},
    { id:2, name: ('course2')},
    { id:3, name: ('course3')},
  ]
 }
  trackCourse(index, course) {
    return course ? course.id :undefined ;
  }

  onAdd(){
    this.course.push({ id: 4, name: 'course4'});
  }

  onRemove(course){
    let index = this.course.indexOf(course);
    this.course.splice(index, 1);
  }

  onChange(course){
    course.name = 'UPDATE';
  }
  task = {
    tittle: 'Review application',
      assignee: {
        name: 'Sushmita Singh'
      }
  }
}
