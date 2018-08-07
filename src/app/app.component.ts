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
        height: 0.17 * innerHeight,
        width: 1.2 * innerWidth,
        delay: 5000,
        duration: 1700,
        elasticity: 200,
      });
      anime({
        targets: '.svg-cover',
        height: 0.15 * innerHeight,
        top: 0.085 * innerHeight,
        delay: 6500,
        duration: 1700,
        elasticity: 200,
      });
    setTimeout(() => {
      this.nameShow = true;
      const cover: any = document.getElementsByClassName('cover')[0];
      cover.style.backgroundColor = '#7E5487';
    }, 1500);
  }
}

// const text = document.getElementById('Layer_1');
// text.margin = text.offsetWidth
