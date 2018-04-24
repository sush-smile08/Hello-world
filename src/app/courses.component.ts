
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
            `
})

export class CoursesComponent{
    tittle = "List of courses";
    courses = ["course1", "course2", "course3"];
}  
 