import type { ExperienceItem } from '@/types/experience';

const experiencias: ExperienceItem[] = [
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

export default function Experience() {
  return (
    <section id="experience" className="card">
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map((e, i) => (
          <li key={i}>
            <strong>{e.titulo}</strong> ({e.fecha})
            <p>{e.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}