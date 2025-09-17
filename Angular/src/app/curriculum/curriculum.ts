import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { EducationComponent } from './education/education';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [Header, Footer, SkillsComponent, ExperienceComponent, EducationComponent],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
}
