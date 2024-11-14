import { Component } from '@angular/core';

@Component({
  selector: 'app-project-nav-links',
  templateUrl: './project-nav-links.component.html',
  styleUrls: ['./project-nav-links.component.scss']
})
export class ProjectNavLinksComponent {

  projects: any = [
    { name : 'abc', link : '/abc'},
    { name : 'def', link : '/def'},
    { name : 'abc', link : '/abc'}
  ]
}
