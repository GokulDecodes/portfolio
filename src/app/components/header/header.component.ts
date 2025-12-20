import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    menuOpen = false;
    @Output() scrollToSection = new EventEmitter<string>();

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    scrollTo(sectionId: string) {
        this.scrollToSection.emit(sectionId);
        this.menuOpen = false;
    }
}
