import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-heading-section',
  templateUrl: './portfolio-heading-section.component.html',
  styleUrls: ['./portfolio-heading-section.component.scss']
})
export class PortfolioHeadingSectionComponent {

  heading: string = 'I develop user experiences for people like you.'

  ngOnInit(){
    this.heading = this.heading.toLocaleUpperCase();
  }
}
