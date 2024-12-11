import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent {

  name:string = 'Lakshya Kalia';

  ngOnInit(){
    this.name = this.name.toLocaleUpperCase();
  }
}
