import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ tittle }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img [src]="imageUrl" />
        <button class="btn btn-primary" [class.active]="">save</button>
        <button (click)="onSave()">click</button>
        <input [(ngModel)]="name" (keyup.enter)="onKeyUp()"/>
            `
})

export class CoursesComponent{
    tittle = "List of courses";
    inageUrl = "http://www.skamaniacoves.com/treehouse.php";
    isActive = true;
    onSave(){
        alert ("button was clicked");
    }
    name = "Sushmita";
    onKeyUp(){
         alert (this.name);
    }
    courses;

     constructor(service : CoursesService ){
         this.courses = service.getCourses();
     }
     
}  
 