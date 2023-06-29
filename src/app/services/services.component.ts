import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[]=[
    {icon:'bi bi-palette-fill',name:'Logo & Branding',description:'Logo Design,\nBusiness Card Design,\nLabel Design'},
    {icon:'bi bi-graph-up-arrow',name:'Stock Analysis',description:'Technical Analysis,\nFinancial Advice,\nRisk Management'},
    {icon:'bi bi-bullseye',name:'Art & Illustrations',description:'Illustration Design,\nArt Design,\nInvitation Design'},
    {icon:'bi bi-cpu',name:'Graphic Design Services',description:'Graphic Design,\nPhotoshop Design,\n3D Design'},
    {icon:'bi bi-printer-fill',name:'Print Design Services',description:'Brochure Design,\nPoster Design,\nCatalogue Design'},
    {icon:'bi bi-pencil-square',name:'Computer Course Instructor',description:'CS Educator,\nCourse Guidance'}
  ]
}

interface Service{
  icon:string,
  name:string;
  description:string;
}