import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MySharedServiceService } from '../../service/my-shared-service.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    @Output() scrollToSection = new EventEmitter<string>();
    @Output() downloadCVClick = new EventEmitter<void>();
    countprojectscompleted: any;
    constructor(private mySharedService: MySharedServiceService) { }

    ngOnInit() {
        this.mySharedService.currentmessage.subscribe(message => this.countprojectscompleted = message);
    }
    scrollToContact() {
        this.scrollToSection.emit('contact');
    }

    downloadCV() {
        const link = document.createElement('a');
        link.href = '/Assets/Gokul_P.pdf';
        link.download = 'Gokul_P_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
