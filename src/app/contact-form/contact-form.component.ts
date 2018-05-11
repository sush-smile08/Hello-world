import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMehods = [
    { id: 1, name: 'Email' }
    { id: 2, name: 'Email' }
  ]
  log(x) {console.log(x); }

  submit(f){
    console.log(f);
  }

}
