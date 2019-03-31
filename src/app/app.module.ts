import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { AppComponent } from './app.component';
import { HeadContentComponent } from './head-content/head-content.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadContentComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
