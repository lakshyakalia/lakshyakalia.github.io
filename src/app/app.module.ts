import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { ProjectNavLinksComponent } from './components/project-nav-links/project-nav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    PortfolioContentComponent,
    ProjectNavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
