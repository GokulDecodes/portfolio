import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedServiceService } from '../../service/my-shared-service.service';

interface PortfolioItem {
    id: number;
    title: string;
    category: string[];
    image: string;
    description: string;
}

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    constructor(private mySharedService: MySharedServiceService) {
        this.mySharedService.updateProjectsCompleted(this.portfolioItems.length.toString());
    }

    portfolioItems: PortfolioItem[] = [
        {
            id: 1,
            title: 'Rockwell Automation - FDTS',
            category: ['web'],
            image: '/portfolio/project1.png',
            description: 'Factory Data Tracking System with real-time monitoring and analytics for industrial operations'
        },
        {
            id: 2,
            title: 'Device Configuration Manager',
            category: ['web', 'mobile'],
            image: '/portfolio/project2.png',
            description: 'Web application for configuring and monitoring industrial devices across environments'
        },
        {
            id: 3,
            title: 'BN Scout200 - S1 Collector',
            category: ['mobile'],
            image: '/portfolio/project3.jpg',
            description: 'Mobile app for vibration data collection and diagnostics using Bluetooth/USB'
        },
        {
            id: 4,
            title: 'Asset Lifecycle Management',
            category: ['web'],
            image: '/portfolio/project4.png',
            description: 'Platform for tracking asset acquisition, usage, maintenance, and disposal'
        },
        {
            id: 5,
            title: 'Clearcase to Github mirgation',
            category: ['web'],
            image: '/portfolio/project5.png',
            description: 'Need to migrate Clearcase to Github code repository and dependencies'
        }
    ];

    filteredPortfolio: PortfolioItem[] = this.portfolioItems;
    activeFilter = 'all';

    filterPortfolio(category: string) {
        this.activeFilter = category;
        if (category === 'all') {
            this.filteredPortfolio = this.portfolioItems;
        } else {
            this.filteredPortfolio = this.portfolioItems.filter(
                item => item.category.includes(category)
            );
        }
    }
}
