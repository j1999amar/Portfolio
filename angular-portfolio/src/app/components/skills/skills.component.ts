
import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26', level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6', level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e', level: 90, category: 'Frontend' },
    { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178c6', level: 85, category: 'Frontend' },
    { name: '.NET', icon: 'fab fa-microsoft', color: '#512bd4', level: 95, category: 'Backend' },
    { name: 'Java', icon: 'fab fa-java', color: '#ed8b00', level: 80, category: 'Backend' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd1b16', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3', level: 85, category: 'Frontend' },
    { name: 'PrimeNG', icon: 'fas fa-puzzle-piece', color: '#00d4aa', level: 80, category: 'Frontend' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900', level: 75, category: 'Cloud' },
    { name: 'SQL', icon: 'fas fa-database', color: '#336791', level: 90, category: 'Database' }
  ];

  categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Database'];
  selectedCategory = 'All';

  get filteredSkills() {
    if (this.selectedCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
  }

  trackBySkill(index: number, skill: Skill): string {
    return skill.name;
  }
}
