import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ContactForm {
  name: string;
  phone: string;
  comments: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    phone: '',
    comments: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  // Formspree endpoint - replace with your form ID
  private formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

  socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/amarnath-jeganathan-44a41b95/', name: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/j1999amar', name: 'GitHub' },
    { icon: 'fas fa-envelope', url: 'mailto:j1999amar@gmail.com', name: 'Email' }
  ];

  constructor(private http: HttpClient) {}

  submitForm() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      
      const formData = {
        name: this.contactForm.name,
        phone: this.contactForm.phone,
        message: this.contactForm.comments,
        email: 'j1999amar@gmail.com'
      };

      this.http.post(this.formspreeEndpoint, formData).subscribe({
        next: (response) => {
          console.log('Email sent successfully!', response);
          this.isSubmitting = false;
          this.isSubmitted = true;
          
          // Reset form after 3 seconds
          setTimeout(() => {
            this.resetForm();
          }, 3000);
        },
        error: (error) => {
          console.error('Failed to send email:', error);
          this.isSubmitting = false;
          // Fallback to mailto
          this.openMailClient();
        }
      });
    }
  }

  // Fallback method - opens email client
  private openMailClient() {
    const mailToLink = `mailto:j1999amar@gmail.com?subject=Portfolio Contact from ${this.contactForm.name}&body=Name: ${this.contactForm.name}%0APhone: ${this.contactForm.phone}%0A%0AComments:%0A${this.contactForm.comments}`;
    window.open(mailToLink, '_blank');
  }

  isFormValid(): boolean {
    return this.contactForm.name.trim() !== '' && 
           this.contactForm.phone.trim() !== '' && 
           this.contactForm.comments.trim() !== '';
  }

  resetForm() {
    this.contactForm = {
      name: '',
      phone: '',
      comments: ''
    };
    this.isSubmitted = false;
  }
}
