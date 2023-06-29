import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  experiences:Experience[]=[
    {startYear:'Jan 2017',endYear:'Present',name:'Computer Courses Instructor',company:'Computer Web',content:'Providing knowledge and empowering individuals to thrive in the digital age by delivering engaging and comprehensive computer courses to diverse audiences.'},
    {startYear:'May 2019',endYear:'Jul 2021',name:'Junior Stock Advisor',company:'Power Wealth Management System',content:'Responsible for leveraging data analysis and strategic decision-making to achieve profitable outcomes.'},
 ]
}

interface Experience{
  startYear:string,
  endYear:string,
  name:string,
  company:string,
  content:string
}
