import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject<'light' | 'dark'>('dark');
  currentTheme = this.theme.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        this.setTheme(savedTheme, false); // Don't save to LS if just loading
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(prefersDark ? 'dark' : 'light', false);
      }
    }
  }

  setTheme(theme: 'light' | 'dark', saveToStorage: boolean = true) {
    this.theme.next(theme);
    if (isPlatformBrowser(this.platformId)) {
      if (saveToStorage) {
        localStorage.setItem('theme', theme);
      }
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  toggleTheme() {
    const newTheme = this.theme.value === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}
