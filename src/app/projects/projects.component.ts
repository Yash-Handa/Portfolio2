import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Projects } from './projects';
import { CarouselComponent } from 'ngx-carousel-lib';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('carousel') carousel: CarouselComponent;
  public innerWidth: any;
  looperCheck = true;
  projects: Projects[] = [
    {
      name: 'Project 1',
      description: `Description of the Project`,
      tStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projT.jpg)',
        'background-size': '100% 100%'
      },
      bStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projB.jpg)',
        'background-size': '100% 100%'
      },
      gitHubLink: 'https://www.google.com',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true
    },
    {
      name: 'Project 2',
      description: `Description of the Project`,
      tStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projT.jpg)',
        'background-size': '100% 100%'
      },
      bStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projB.jpg)',
        'background-size': '100% 100%'
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true
    },
    {
      name: 'Project 3',
      description: `Description of the Project`,
      tStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projT.jpg)',
        'background-size': '100% 100%'
      },
      bStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projB.jpg)',
        'background-size': '100% 100%'
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true
    },
    {
      name: 'Project 4',
      description: `Description of the Project`,
      tStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projT.jpg)',
        'background-size': '100% 100%'
      },
      bStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projB.jpg)',
        'background-size': '100% 100%'
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true
    },
    {
      name: 'Project 5',
      description: `Description of the Project`,
      tStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projT.jpg)',
        'background-size': '100% 100%'
      },
      bStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projB.jpg)',
        'background-size': '100% 100%'
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true
    },
    {
      name: 'Project 6',
      description: `Description of the Project`,
      tStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projT.jpg)',
        'background-size': '100% 100%'
      },
      bStyle: {
        background: 'url(../../Portfolio2/assets/ProjectImages/projB.jpg)',
        'background-size': '100% 100%'
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true
    }
  ];
  projectNo: number = this.projects.length;
  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  onReachEndFn() {
    if (this.looperCheck === false) {
    } else {
      this.carousel.slideTo(0);
    }
  }

  onTouchStartFn() {
    this.carousel.autoPlayStop();
    this.looperCheck = false;
  }

  goLeft() {
    this.onTouchStartFn();
    this.carousel.slidePrev();
  }

  goRight() {
    this.onTouchStartFn();
    this.carousel.slideNext();
  }

  preventParentClick(e: any) {
    e.stopPropagation();
  }
}
