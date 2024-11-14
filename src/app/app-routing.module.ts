import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';

const routes: Routes = [
  { path: '', component: PortfolioContentComponent, },
  // {
    
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
