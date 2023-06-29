import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('5000ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent {

  designSkills=[
    {'name':'Photoshop','score':[1,2,3,4],'rem':[1]},
    {'name':'Coral Draw','score':[1,2,3,4],'rem':[1]},
    {'name':'Illustrator','score':[1,2,3,],'rem':[1,2]},
    {'name':'Maya','score':[1,2,3,4,5],'rem':[]},
    {'name':'Indesign','score':[1,2,3],'rem':[1,2]},
    {'name':'Premier','score':[1,2,3,4],'rem':[1]},
  ];

  tradingSkills=[
    {'name':'Technical Analysis','score':[1,2,3],'rem':[1,2]},
    {'name':'Fundamental Analysis','score':[1,2,3],'rem':[1,2]}
  ]

  codingSkills=[
    {'name':'C++','score':[1,2,3,4],'rem':[1]},
    {'name':'Java','score':[1,2,3,],'rem':[1,2]},
    {'name':'SQL','score':[1,2,3,4,5],'rem':[]},
    {'name':'HTML','score':[1,2,3,4,5],'rem':[]},
    {'name':'CSS','score':[1,2],'rem':[1,2,3]},
    {'name':'JavaScript','score':[1,2],'rem':[1,2,3]}
  ]
}
