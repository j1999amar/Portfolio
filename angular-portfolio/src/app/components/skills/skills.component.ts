
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
    { name: 'Java', icon: 'fab fa-java', color: '#ed8b00', level: 70, category: 'Backend' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd1b16', level: 90, category: 'Frontend' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb', level: 65, category: 'Frontend' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3', level: 85, category: 'Frontend' },
    { name: 'PrimeNG', icon: 'fas fa-puzzle-piece', color: '#00d4aa', level: 80, category: 'Frontend' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', level: 85, category: 'Backend' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900', level: 70, category: 'Cloud' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078d4', level: 65, category: 'Cloud' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed', level: 60, category: 'DevOps' },
    { name: 'SQL', icon: 'fas fa-database', color: '#336791', level: 90, category: 'Database' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248', level: 64, category: 'Database' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032', level: 92, category: 'DevOps' },
    { name: 'Prompt Engineering', icon: 'fas fa-brain', color: '#ff6b6b', level: 85, category: 'AI/ML' },
    { name: 'ChatGPT/LLMs', icon: 'fas fa-robot', color: '#10a37f', level: 90, category: 'AI/ML' },
    { name: 'RESTful APIs', icon: 'fas fa-exchange-alt', color: '#25d366', level: 92, category: 'Backend' },
    { name: 'GraphQL', icon: 'fas fa-project-diagram', color: '#e10098', level: 78, category: 'Backend' },
    { name: 'Microservices', icon: 'fas fa-cubes', color: '#4285f4', level: 80, category: 'Backend' },
    { name: 'Agile/Scrum', icon: 'fas fa-sync-alt', color: '#00c851', level: 90, category: 'Management' },
    { name: 'JIRA', icon: 'fab fa-atlassian', color: '#0052cc', level: 85, category: 'Management' },
  ];

  categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Database', 'DevOps', 'AI/ML', 'Management',];
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
