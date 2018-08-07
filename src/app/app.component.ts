import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  nameShow = false;
  sizeConditioner(condSmall, condMed, condlarge) {
    if (window.matchMedia('(max-width: 600px)').matches) { return condSmall; } 
    else if (window.matchMedia('(max-width: 930px)').matches) { return condMed; }
    else { return condlarge; }
  };
  ngAfterViewInit() {
    const timeLine = anime.timeline();
    timeLine
      .add({
        targets: '.task',
        width: 1.5 * innerWidth,
        height: 1.5 * innerHeight,
        duration: 1500,
        easing: 'easeInOutQuart',
      })
      .add({
        targets: '.task',
        height: 0.15 * innerHeight,
        width: 1.2 * innerWidth,
        delay: 5000,
        duration: 1700,
        elasticity: 200,
      });
      anime({
        targets: '.svg-cover',
        height: 0.17 * innerHeight,
        top: 0.085 * innerHeight,
        left: this.sizeConditioner(0.5 * innerWidth, 0.3 * innerWidth, 0.2 * innerWidth),
        delay: 6700,
        duration: 1700,
        elasticity: 200,
      });
    setTimeout(() => {
      this.nameShow = true;
      const cover: any = document.getElementsByClassName('cover')[0];
      cover.style.backgroundColor = 'rgb(162, 87, 179)';
    }, 1500);
  }
}
