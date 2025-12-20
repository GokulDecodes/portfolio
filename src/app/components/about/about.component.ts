import { isPlatformBrowser } from '@angular/common';
import { Component, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
    @Output() downloadCVClick = new EventEmitter<void>();
    @Output() scrollToSection = new EventEmitter<string>();

    downloadCV() {
        const link = document.createElement('a');
        link.href = '/Assets/Gokul_P.pdf';
        link.download = 'Gokul_P_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    scrollToContact() {
        this.scrollToSection.emit('contact');
    }
}
