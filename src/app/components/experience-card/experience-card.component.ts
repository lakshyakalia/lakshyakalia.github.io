import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {

  skills: any = [{
    skillName: 'HTML'
  },
  {
    skillName: 'CSS'
  },
  {
    skillName: 'jQuery'
  },
  {
    skillName: 'JavaScript'
  },
  {
    skillName: 'TypeScript'
  },
  {
    skillName: 'Node.js'
  }]
}
