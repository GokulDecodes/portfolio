import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    openSocial(platform: string) {
        if (isPlatformBrowser(this.platformId)) {
            const links: { [key: string]: string } = {
                linkedin: 'https://www.linkedin.com/in/gokul-partha-sarathy-a056392a1/',
                github: 'https://github.com/GokulDecodes',
                twitter: 'https://twitter.com',
                instagram: 'https://instagram.com'
            };
            window.open(links[platform], '_blank');
        }
    }
}
