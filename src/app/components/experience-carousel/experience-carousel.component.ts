import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-carousel',
  templateUrl: './experience-carousel.component.html',
  styleUrls: ['./experience-carousel.component.scss']
})
export class ExperienceCarouselComponent {

  experiences = [
    {
      "companyName": "CG Infinity Pvt. Ltd.",
      "role": "Full Stack Developer (Consultant 2)",
      "year": "2022",
      "desc":"Engineered a single-page Angular application, optimizing performance by 40% and enhancing user interactions through streamlined architecture and dynamic UI components."
    },
    {
      "companyName": "CG Infinity Pvt. Ltd.",
      "role": "Full Stack Developer (Consultant 1)",
      "year": "2020 - 2022",
      "desc":"Developed a content management system from scratch, optimized backend workflows, and implemented API integrations to enhance property management and content updates. Led the redesign of a partner and pricing portal, improving user experience and system reliability with dynamic UI components and strategic backend enhancements."
    },
    {
      "companyName": "CG Infinity Pvt. Ltd.",
      "role": "Software Developer Intern",
      "year": "2019 - 2020",
      "desc":"Contributed to the development of a hiring portal, implementing backend services with Node.js and MongoDB, and optimizing frontend performance to enhance data management and user experience."
    }
  ]

  convertNewLinesToBreaks(text: string): string {
    return text.replace('. ', '. <br><br>');
  }
}
