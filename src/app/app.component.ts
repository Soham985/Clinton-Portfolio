import { animate, style, transition, trigger, query, group } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('pageAnimation',[
      transition('*=>*',[
        style({
          opacity:0,
          display:'block'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent implements OnInit{

  mouseX = 0;
  mouseY = 0;

  welcomeDisplay:boolean = true;

  constructor(private dialog:MatDialog, private breakpointObserver: BreakpointObserver){}

  ngOnInit(){
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, '(min-width: 1000px)'])
      .subscribe(result => {
        if (result.breakpoints['(min-width: 1000px)'] && this.welcomeDisplay) {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.backdropClass = 'bdrop';
          this.dialog.open(WelcomeComponent,dialogConfig);
          this.welcomeDisplay=false;
        }
      });
    
  }
  
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

  if (event.clientX >= 0 && event.clientX <= viewportWidth-20 && event.clientY >= 0 && event.clientY <= viewportHeight-20) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  }
  
  prepareRoute(outlet:RouterOutlet){
    if(outlet.isActivated){
      return outlet.activatedRoute.url;
    }
    return '';
  }
}
