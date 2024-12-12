import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  onScrollUp(){
    document.getElementById("top")?.scrollIntoView({behavior: "smooth"});
    // console.log("asdas")
  }
}
