import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { ProjectNavLinksComponent } from './components/project-nav-links/project-nav-links.component';
import { PortfolioHeadingSectionComponent } from './components/portfolio-heading-section/portfolio-heading-section.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SocialsComponent } from './components/socials/socials.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ExperienceCarouselComponent } from './components/experience-carousel/experience-carousel.component';
import { AboutImagesComponent } from './components/about-images/about-images.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PortfolioContentComponent,
    ProjectNavLinksComponent,
    PortfolioHeadingSectionComponent,
    AboutComponent,
    ExperienceCardComponent,
    SkillsComponent,
    SkillCardComponent,
    SocialsComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ExperienceCarouselComponent,
    AboutImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
