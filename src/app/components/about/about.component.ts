import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name:string = 'Lakshya Kalia';
  email:string = 'lakshyakalia1998@gmail.com'
  desc:string = `I'm a developer, proficient in both frontend and backend technologies with a strong focus on crafting scalable applications that prioritize user-centric design. Experienced in Agile/Scrum methodologies, integrating APIs, optimizing performance, problem-solving, networking concepts, and algorithm design, I deliver efficient solutions that align with business goals.`
  experiences: any = [
    { date: '2024-PRESENT', title: 'Consultant 2', roleDescription : 'Lorem'},
    { date: '2024-PRESENT', title: 'Consultant 2', roleDescription : 'Lorem'},
    { date: '2024-PRESENT', title: 'Consultant 2', roleDescription : 'Lorem'}
  ]

}
