import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-carousel-lib';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @ViewChild('carousel') carousel: CarouselComponent;
  public end = false;
  constructor() { }

  ngOnInit() {
  }

  preventParentClick(e: any) {
    e.stopPropagation();
  }

  goLeft() {
    this.carousel.slidePrev();
  }

  goRight() {
    this.carousel.slideNext();
  }

  onEnd() {
    this.end = true;
  }

  onStart() {
    this.end = false;
  }
}
