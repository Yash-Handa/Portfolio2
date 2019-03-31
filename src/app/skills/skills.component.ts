import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
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
      name: 'MongoDB',
      class: 'mongo'
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
      name: 'GitHub',
      class: 'github'
    },
    {
      name: 'BootStrap.css',
      class: 'bootstrap'
    },
    {
      name: 'Anime.js',
      class: 'anime'
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
    }
  ];
  skillNo: number = this.skills.length;
  constructor() { }

  ngOnInit() {
  }

  preventParentClick(e: any) {
    e.stopPropagation();
  }
}
