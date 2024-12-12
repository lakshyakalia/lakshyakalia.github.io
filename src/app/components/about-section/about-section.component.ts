import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {

  onScrollDown(){
    document.getElementById("experience")?.scrollIntoView({behavior: "smooth"});
    // console.log("asdas")
  }
}
