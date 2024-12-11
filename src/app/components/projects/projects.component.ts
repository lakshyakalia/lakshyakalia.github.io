import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      'title': 'Disney+ Clone',
      'desc': 'A responsive Disney+ Clone showcasing an interactive home page for trending movies and shows. Built with React, Redux, and Firebase for seamless state management, authentication, and real-time database support. The design is fully responsive, ensuring an optimized experience across desktops, tablets, and smartphones.',
      'img': 'https://raw.githubusercontent.com/lakshyakalia/disney-clone/refs/heads/main/src/assets/images/disneyplus-screenshot.png',
      'code': 'https://github.com/lakshyakalia/disney-clone',
      'demo': 'https://disneyplus-clone-b7b4a.web.app/',
      'order': 1
    },
    {
      'title': 'Portfolio Website',
      'desc': 'A dynamic and interactive portfolio website built to showcase technical expertise in software development. It features a responsive design, ensuring seamless accessibility across devices, and utilizes modern web technologies for fast load times and smooth animations. The site employs modular, reusable components, and follows best practices in clean code architecture. Projects are displayed using an interactive gallery, complete with detailed descriptions and live previews. The portfolio emphasizes proficiency in front-end and back-end development, API integration, and performance optimization, offering visitors a comprehensive view of technical skills, tools, and accomplishments.',
      'img': 'https://raw.githubusercontent.com/lakshyakalia/lakshyakalia.github.io/main/image.png',
      'code': 'https://github.com/lakshyakalia/lakshyakalia.github.io',
      'demo': 'https://lakshyakalia.github.io/',
      'order': 2
    },
    {
      'title': 'Dealmart - An Ecommerce Website',
      'desc': 'Dealmart is a feature-rich eCommerce website designed to deliver a seamless shopping experience. Built with a focus on scalability and performance, it incorporates a responsive UI, ensuring smooth navigation across devices. The platform supports secure user authentication, real-time product search, and dynamic cart management. With efficient back-end integration, it enables streamlined order processing, payment gateway support, and inventory tracking. Dealmart emphasizes modern development practices, leveraging clean architecture, reusable components, and API-driven workflows to ensure maintainability and performance optimization. This project highlights expertise in full-stack development, API integration, and user-centric design.',
      'img': 'https://raw.githubusercontent.com/lakshyakalia/dealmart/refs/heads/main/assets/dealmart.png',
      'code': '#',
      'demo': '#',
      'order': 3
    }
  ]

  ngOnInit(){
    this.updateOrderOfProjects()
  }

  updateOrderOfProjects(){
    this.projects.sort((a, b) => a.order - b.order);
  }
}
