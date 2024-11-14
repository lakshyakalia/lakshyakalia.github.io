import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: PortfolioContentComponent, },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
