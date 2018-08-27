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
      description: `Description of the Project`,
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
      description: `Description of the Project`,
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
      description: `Description of the Project`,
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
      description: `Description of the Project`,
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
      description: `Description of the Project`,
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
      description: `Description of the Project`,
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
