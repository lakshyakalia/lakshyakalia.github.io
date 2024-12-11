import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.scss']
})
export class PortfolioContentComponent {

  onScrollClick(){
    document.getElementById("project0")?.scrollIntoView({behavior: "smooth"});
    // console.log("asdas")
  }
}
