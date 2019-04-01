import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public innerWidth: any;
  skills: object[] = [
    {
      name: 'HTML5',
      class: 'html'
    },
    {
      name: 'CSS3',
      class: 'css3'
    },
    {
      name: 'JavaScript',
      class: 'js'
    },
    {
      name: 'Angular',
      class: 'ng'
    },
    {
      name: 'Node.js',
      class: 'node'
    },
    {
      name: 'Express.js',
      class: 'ex'
    },
    {
      name: 'React.js',
      class: 'react'
    },
    {
      name: 'MongoDB',
      class: 'mongo'
    },
    {
      name: 'GraphQL',
      class: 'graphql'
    },
    {
      name: 'Heroku',
      class: 'heroku'
    },
    {
      name: 'Mocha.js',
      class: 'mocha'
    },
    {
      name: 'FireBase',
      class: 'firebase'
    },
    {
      name: 'PWA',
      class: 'pwa'
    },
    {
      name: 'BootStrap.css',
      class: 'bootstrap'
    },
    {
      name: 'Materialize.css',
      class: 'materialize'
    },
    {
      name: 'TypeScript',
      class: 'type'
    },
    {
      name: 'Hapi.js',
      class: 'hapi'
    },
    {
      name: 'Azure',
      class: 'azure'
    },
    {
      name: 'GCP',
      class: 'gcp'
    },
    {
      name: 'Passport.js',
      class: 'passport'
    },
    {
      name: 'C/C++',
      class: 'c'
    },
    {
      name: 'Java Core',
      class: 'java'
    },
    {
      name: 'Illustrator',
      class: 'ai'
    },
    {
      name: 'Photoshop',
      class: 'ph'
    },
    {
      name: 'Wordpress',
      class: 'wp'
    },
    {
      name: 'Apollo',
      class: 'apollo'
    },
    {
      name: 'Redux',
      class: 'redux'
    },
    {
      name: 'RxJS',
      class: 'rxjs'
    },
    {
      name: 'NgRx',
      class: 'ngrx'
    },
    {
      name: 'MySQL',
      class: 'mysql'
    },
    {
      name: 'PostgreSQL',
      class: 'postgre'
    },
    {
      name: 'Python',
      class: 'python'
    },
    {
      name: 'Jasmine',
      class: 'jasmine'
    },
    {
      name: 'Travis CI',
      class: 'travis'
    },
    {
      name: 'GitHub',
      class: 'github'
    }
  ];
  skillNo: number = this.skills.length;
  p = 1;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  preventParentClick(e: any) {
    e.stopPropagation();
  }
}
