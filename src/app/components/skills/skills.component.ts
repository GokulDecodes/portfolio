import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
    title: string;
    skills: string[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
    skillCategories: SkillCategory[] = [
        {
            title: 'Programming',
            skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'SQL']
        },
        {
            title: 'Frameworks',
            skills: ['Angular 10+', 'AngularJS', 'Ionic', 'Node.js', 'RxJS', 'Bootstrap', 'jQuery']
        },
        {
            title: 'Testing',
            skills: ['TestCafe', 'Selenium', 'Jasmine', 'Jest']
        },
        {
            title: 'DevOps',
            skills: ['Jenkins', 'GitLab CI/CD', 'Docker']
        },
        {
            title: 'Tools',
            skills: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'Figma', 'Chrome DevTools']
        },
        {
            title: 'Concepts',
            skills: ['Clean Code', 'Modular Architecture', 'REST APIs', 'WebSockets', 'AJAX', 'Responsive Design']
        }
    ];
}
