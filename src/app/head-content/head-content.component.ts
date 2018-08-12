import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrls: ['./head-content.component.css', './head-contact.component.css']
})
export class HeadContentComponent implements OnInit, AfterViewInit {
  size = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('portrait-cover').className += 'animated rotateInDownLeft';
    setTimeout(() => {
      document.getElementById('portrait-cover').className = '';
    }, 1000);
    document.getElementById('content').className = 'animated rollIn';
  }
}
