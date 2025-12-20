import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contactForm: ContactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    isLoading = false;
    statusMessage = '';
    isSuccess = false;

    // EmailJS Configuration - Replace with your IDs from https://www.emailjs.com/
    private serviceId = 'service_portfolio';
    private templateId = 'template_portfolio';
    private publicKey = 'JSz1zZloelAB8bHm7';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    submitContactForm() {
        if (!isPlatformBrowser(this.platformId)) return;

        if (!this.contactForm.name || !this.contactForm.email ||
            !this.contactForm.subject || !this.contactForm.message) {
            this.statusMessage = 'Please fill in all fields';
            this.isSuccess = false;
            return;
        }

        this.isLoading = true;
        this.statusMessage = '';

        const templateParams = {
            from_name: this.contactForm.name,
            from_email: this.contactForm.email,
            subject: this.contactForm.subject,
            message: this.contactForm.message,
            to_name: 'Gokul P'
        };

        emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
            .then(() => {
                this.isLoading = false;
                this.isSuccess = true;
                this.statusMessage = 'Message sent successfully!';
                this.contactForm = { name: '', email: '', subject: '', message: '' };
            })
            .catch((error) => {
                this.isLoading = false;
                this.isSuccess = false;
                this.statusMessage = 'Failed to send message. Please try again.';
                console.error('EmailJS error:', error);
            });
    }

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








