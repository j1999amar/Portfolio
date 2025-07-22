
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayText = '';
  fullText = "I'm a .NET Full-Stack Developer";
  currentIndex = 0;
  typingInterval: any;
  isTypingComplete = false;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTypingAnimation() {
    this.typingInterval = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.displayText += this.fullText[this.currentIndex];
        this.currentIndex++;
      } else {
        this.isTypingComplete = true;
        clearInterval(this.typingInterval);
      }
    }, 100);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
