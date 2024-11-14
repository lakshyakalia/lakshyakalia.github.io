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

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PortfolioContentComponent,
    ProjectNavLinksComponent,
    PortfolioHeadingSectionComponent,
    AboutComponent,
    ExperienceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
