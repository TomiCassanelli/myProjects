import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  habilidades: string[] = ['C++', 'SQL', 'ReactJS', 'Git', 'Go', 'Azure (Cloud)'];
  aptitudes: string[] = [
    'Inglés Intermedio',
    'Trabajo en Equipo',
    'Proactividad',
    'Organización',
    'Responsabilidad',
  ];
}
