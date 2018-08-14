import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrls: ['./head-content.component.css', './head-contact.component.css']
})
export class HeadContentComponent implements OnInit, AfterViewInit {
  size = window.innerWidth;
  mouseEnter($event) {
    $event.target.className = 'animated tada infinite';
  }
  mouseLeave($event) {
    $event.target.className = 'bottom-iconBtn vertical-align-wrapper';
  }
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('portrait-cover').className += 'animated rotateInDownLeft';
    document.getElementById('circle-cover').className += ' animated bounceInDown';
    document.getElementById('expert').className += ' animated bounceInDown delay-2s';
    document.getElementById('expert2').className += ' animated fadeIn delay-1s';
    document.getElementById('content').className = 'animated fadeIn delay-1s';
    document.getElementById('inspired').className = 'animated fadeIn delay-1s';
    setTimeout(() => {
      document.getElementById('portrait-cover').className = '';
    }, 1000);
  }
}
