import type { Edu } from '@/types/education';

const educacion: Edu[] = [
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

export default function Education() {
  return (
    <section id="education" className="card">
      <h2>Educación</h2>
      <ul>
        {educacion.map((e, i) => (
          <li key={i}>
            <strong>{e.titulo} - ({e.institucion}):</strong> ({e.anioDesde} - {e.anioHasta ?? 'actual'})
            {e.promedio ? ` - Promedio ${e.promedio}/10` : null}
          </li>
        ))}
      </ul>
    </section>
  )
}