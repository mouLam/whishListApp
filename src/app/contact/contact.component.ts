import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {buildInvalidEmailHostValidator} from "./invalidEmailValidator";

const invalidEmailHostValidator = buildInvalidEmailHostValidator([
  'gmail.com',
  'hotmail.com',
  'yahoo.com',
  'outlook.com'
])

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, invalidEmailHostValidator]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor() { }

  submitForm() {
    console.log(this.contactForm.valid);
  }



}
