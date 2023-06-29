import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm!:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private router: Router){}

  ngOnInit(){
    this.contactForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',[Validators.required]],
      message:['',Validators.required]
    });
  }

  mail(){
    const email = 'clintonghosh777@gmail.com';
    const subject = 'Website Connection';
    const body = `Hello Clinton,\n${this.contactForm.value.message}\n\nRegards,\n${this.contactForm.value.name}`; 
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log(body)
    window.location.href = mailtoUrl;
    this.contactForm.reset();
  }
}
