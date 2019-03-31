import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-head-content',
  templateUrl: './head-content.component.html',
  styleUrls: ['./head-content.component.css', './head-contact.component.css']
})
export class HeadContentComponent implements OnInit, AfterViewInit {
  @ViewChild('lightbox') lightbox: ElementRef;
  size = window.innerWidth;
  mouseEnter($event) {
    $event.target.className = 'animated tada infinite';
  }
  mouseLeave($event) {
    $event.target.className = 'bottom-iconBtn vertical-align-wrapper';
  }
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('portrait-cover').className += ' animated rotateInDownLeft';
    document.getElementById('circle-cover').className += ' animated bounceInDown';
    document.getElementById('expert').className += ' animated bounceInDown delay-2s';
    document.getElementById('next').className += ' animated bounceInDown delay-2s';
    document.getElementById('expert2').className += ' animated fadeIn delay-1s';
    document.getElementById('content').className = 'animated fadeIn delay-1s';
    document.getElementById('inspired').className = 'animated fadeIn delay-1s';
    this.renderer.setStyle(this.lightbox.nativeElement, 'display', 'none');
    setTimeout(() => {
      document.getElementById('portrait-cover').className = '';
    }, 1000);
    setTimeout(() => {
      document.getElementById('next').className = 'next animated bounce infinite';
    }, 3000);
  }

  stopReload(e: any) {
    e.preventDefault();
    if (this.lightbox.nativeElement.style.display === 'none') {
      this.renderer.setStyle(this.lightbox.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.lightbox.nativeElement, 'display', 'none');
    }
  }
}
