import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [
    {
      name: 'Project 1',
      description: `I designed this shirt for my friend's band "2 or More". I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn't.`,
      tStyle: {
        'background': 'url(../../assets/Project-Images/projT.jpg)',
        'background-size': '100% 100%',
      },
      bStyle: {
        'background': 'url(../../assets/Project-Images/projB.jpg)',
        'background-size': '100% 100%',
      },
      gitHubLink: 'https://www.google.com',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true,
    },
    {
      name: 'Project 2',
      description: `I designed this shirt for my friend's band "2 or More". I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn't.`,
      tStyle: {
        'background': 'url(../../assets/Project-Images/projT.jpg)',
        'background-size': '100% 100%',
      },
      bStyle: {
        'background': 'url(../../assets/Project-Images/projB.jpg)',
        'background-size': '100% 100%',
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true,
    },
    {
      name: 'Project 3',
      description: `I designed this shirt for my friend's band "2 or More". I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn't.`,
      tStyle: {
        'background': 'url(../../assets/Project-Images/projT.jpg)',
        'background-size': '100% 100%',
      },
      bStyle: {
        'background': 'url(../../assets/Project-Images/projB.jpg)',
        'background-size': '100% 100%',
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true,
    },
    {
      name: 'Project 4',
      description: `I designed this shirt for my friend's band "2 or More". I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn't.`,
      tStyle: {
        'background': 'url(../../assets/Project-Images/projT.jpg)',
        'background-size': '100% 100%',
      },
      bStyle: {
        'background': 'url(../../assets/Project-Images/projB.jpg)',
        'background-size': '100% 100%',
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true,
    },
    {
      name: 'Project 5',
      description: `I designed this shirt for my friend's band "2 or More". I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn't.`,
      tStyle: {
        'background': 'url(../../assets/Project-Images/projT.jpg)',
        'background-size': '100% 100%',
      },
      bStyle: {
        'background': 'url(../../assets/Project-Images/projB.jpg)',
        'background-size': '100% 100%',
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true,
    },
    {
      name: 'Project 6',
      description: `I designed this shirt for my friend's band "2 or More". I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn't.`,
      tStyle: {
        'background': 'url(../../assets/Project-Images/projT.jpg)',
        'background-size': '100% 100%',
      },
      bStyle: {
        'background': 'url(../../assets/Project-Images/projB.jpg)',
        'background-size': '100% 100%',
      },
      gitHubLink: '#',
      gitHubButton: true,
      liveLink: '#',
      liveButton: true,
    },
  ];
  projectNo: number = this.projects.length;
  constructor() { }

  ngOnInit() {
  }
}
