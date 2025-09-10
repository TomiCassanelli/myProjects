import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  imports: [NgFor, RouterLink],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
  habilidades: string[] = ['C++', 'SQL', 'ReactJS', 'Git', 'Go', 'Azure (Cloud)'];

  aptitudes: string[] = [
    'Inglés Intermedio',
    'Trabajo en Equipo',
    'Proactividad',
    'Organización',
    'Responsabilidad',
  ];

  experiencias: Experiencia[] = [
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

  educacion: Educacion[] = [
    {
      titulo: 'Ingeniería en Sistemas',
      institucion: 'Universidad Católica de Córdoba',
      anioDesde: 2021,
      anioHasta: 2025,
      promedio: 8.64,
    },
    {
      titulo: 'Bachiller en Administración de Empresas',
      institucion: 'C.E.F San Buenaventura',
      anioDesde: 2015,
      anioHasta: 2020,
      promedio: 9.11,
    },
  ];
}

export interface Experiencia {
  titulo: string;
  fecha: string;
  descripcion: string;
}

export interface Educacion {
  titulo: string;
  institucion: string;
  anioDesde: number;
  anioHasta: number;
  promedio: number;
}
