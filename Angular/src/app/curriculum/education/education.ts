import { Component } from '@angular/core';

interface EducacionItem {
  titulo: string;
  institucion: string;
  anioDesde: number;
  anioHasta: number;
  promedio: number;
}

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  educacion: EducacionItem[] = [
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

