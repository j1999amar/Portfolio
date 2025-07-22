
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  phone: string;
  comments: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    phone: '',
    comments: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/amarnath-jeganathan-44a41b95/', name: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/j1999amar', name: 'GitHub' },
    { icon: 'fas fa-envelope', url: 'mailto:j1999amar@gmail.com', name: 'Email' }
  ];

  // EmailJS Configuration
  private emailjsConfig = {
    serviceId: 'your_service_id', // Replace with your EmailJS service ID
    templateId: 'your_template_id', // Replace with your EmailJS template ID
    publicKey: 'your_public_key' // Replace with your EmailJS public key
  };

  submitForm() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      
      // Send email using EmailJS
      const templateParams = {
        from_name: this.contactForm.name,
        from_phone: this.contactForm.phone,
        message: this.contactForm.comments,
        to_email: 'j1999amar@gmail.com',
        reply_to: this.contactForm.name
      };

      interface EmailJSResponseStatus {
        status: number;
        text: string;
      }

      interface EmailJSError {
        text: string;
        type: string;
      }

      emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        templateParams,
        this.emailjsConfig.publicKey
      ).then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', response.status, response.text);
        this.isSubmitting = false;
        this.isSubmitted = true;
        
        // Reset form after 3 seconds
        setTimeout(() => {
          this.resetForm();
        }, 3000);
      }).catch((error: EmailJSError) => {
        console.error('Failed to send email:', error);
        this.isSubmitting = false;
        // Fallback to mailto
        this.openMailClient();
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
