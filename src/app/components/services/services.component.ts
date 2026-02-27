import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
    icon: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    services: Service[] = [
        {
            icon: 'fa-brands fa-angular',
            title: 'Angular Development',
            description: 'Building scalable Angular 10+ applications with TypeScript, RxJS, and modern best practices for enterprise solutions.'
        },
        {
            icon: 'fa-solid fa-vial-circle-check',
            title: 'Automation Testing',
            description: 'Implementing automated test frameworks using TestCafe, Cypress, and Selenium for regression and E2E testing.'
        },
        {
            icon: 'fa-solid fa-laptop-code',
            title: 'Front-end Engineering',
            description: 'Creating responsive, performant web applications with HTML5, CSS3, SCSS, and modern JavaScript frameworks.'
        },
        {
            icon: 'fa-solid fa-code-branch',
            title: 'CI/CD Integration',
            description: 'Building and maintaining CI/CD pipelines using Jenkins and Azure DevOps for reliable deployments.'
        },
        {
            icon: 'fa-solid fa-pen-ruler',
            title: 'UI/UX Implementation',
            description: 'Developing reusable components and implementing responsive designs with Bootstrap and modern CSS.'
        },
        {
            icon: 'fa-solid fa-gauge-high',
            title: 'Performance Optimization',
            description: 'Optimizing application performance, reducing load times, and improving user experience through best practices.'
        }
    ];
}
