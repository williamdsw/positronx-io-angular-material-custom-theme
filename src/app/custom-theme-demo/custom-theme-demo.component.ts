import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-custom-theme-demo',
  templateUrl: './custom-theme-demo.component.html'
})
export class CustomThemeDemoComponent implements OnInit {

  isOpened: boolean;
  @ViewChild ('sidenav', { static: true }) sidenav: MatSidenav;

  constructor() {
    this.isOpened = true;
  }

  ngOnInit() {
    this.sidenav.fixedTopGap = 55;
    this.isOpened = (window.innerWidth > 768);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidenav.fixedTopGap = 55;
    this.isOpened = (event.target.innerWidth > 768);
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return (width < 768);
  }
}
