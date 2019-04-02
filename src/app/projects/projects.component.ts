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
      name: 'Socio Konnect',
      description: `This is a fun project which enables Simultaneous Posting by Users on different platforms like Facebook, LinkedIn and Twitter`,
      tStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/SocioKonnectT.png)',
      },
      bStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/SocioKonnectB.png)',
      },
      gitHubLink: 'https://github.com/Yash-Handa/Socio-Konnect',
      gitHubButton: true,
      liveLink: 'https://socio-konnect.herokuapp.com',
      liveButton: true
    },
    {
      name: 'Bollywood Debuting Actors',
      description: `A fun family game as a Google Action about guessing the Debuting Film of some of the Great Bollywood Actors`,
      tStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/BDAT.png)',
      },
      bStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/BDAB.png)',
      },
      gitHubLink: '#',
      gitHubButton: false,
      liveLink: 'https://assistant.google.com/services/a/uid/0000008f92f03652?jsmode=o&hl=en-IN&source=web',
      liveButton: true
    },
    {
      name: 'SignIn SignUp',
      description: `This is a fun project which provides complete Authentication and Registration for all users with Google, Facebook, GitHub, LinkedIn and EmailId`,
      tStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/SignInT.png)',
      },
      bStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/SignInB.png)',
      },
      gitHubLink: 'https://github.com/Yash-Handa/SignIn-SignUp',
      gitHubButton: true,
      liveLink: 'https://signin-signup.herokuapp.com',
      liveButton: true
    },
    {
      name: 'Org Geographic',
      description: `The Project is Under Construction :)`,
      tStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/GeoT.png)',
      },
      bStyle: {
        'background-image': 'url(../../Portfolio2/assets/ProjectImages/GeoB.png)',
      },
      gitHubLink: '#',
      gitHubButton: false,
      liveLink: '#',
      liveButton: false
    },
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
