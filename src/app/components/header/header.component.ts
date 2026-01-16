import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    menuOpen = false;
    currentTheme$: Observable<'light' | 'dark'>;

    @Output() scrollToSection = new EventEmitter<string>();

    constructor(private themeService: ThemeService) {
        this.currentTheme$ = this.themeService.currentTheme;
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    scrollTo(sectionId: string) {
        this.scrollToSection.emit(sectionId);
        this.menuOpen = false;
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}

