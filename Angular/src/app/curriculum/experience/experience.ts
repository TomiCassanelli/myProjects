import { Component } from '@angular/core';

interface ExperienciaItem {
  titulo: string;
  fecha: string;
  descripcion: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experiencias: ExperienciaItem[] = [
    {
      titulo: 'Tutorías de Alumnos - UCC',
      fecha: 'Mar 2023 - Dic 2023',
      descripcion: 'Apoyo académico en matemáticas y programación.',
    },
    {
      titulo: 'Coordinador de Proyecto en Equipo - Tech Camp UCC',
      fecha: 'Ago 2022',
      descripcion: 'Liderazgo de equipo y cumplimiento de actividades; propuesta ganadora.',
    },
  ];
}

