import CourseCard from '../components/CourseCard';

function Courses() {
  const cursos = [
    { titulo: 'Saya', descripcion: 'Danza y género musical afroboliviano que se caracteriza por su ritmo y movimientos alegres, así como por sus letras que a menudo relatan la vida cotidiana, la historia y la resistencia del pueblo afrodescendiente.', precio: 'Bs. 100', imagen: 'saya.jpg' },
    { titulo: 'Morenada', descripcion: 'Danza tradicional andina que se caracteriza por el uso de máscaras y trajes de colores vibrantes, especialmente en la zona altiplánica de Bolivia y Perú. La danza representa la llegada de esclavos negros a las minas de Potosí durante la época colonial.', precio: 'Bs. 120', imagen: 'morenada.jpg' },
    { titulo: 'Caporales', descripcion: 'El caporal es representado por un bailarín que personifica al capataz de esclavos negros en la época colonial, y su vestuario y movimientos reflejan este rol de autoridad.', precio: 'Bs. 110', imagen: 'caporales.jpg' }
  ];

  return (
    <div>
      <h2>Oferta de Cursos</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {cursos.map((curso, idx) => (
          <CourseCard key={idx} {...curso} />
        ))}
      </div>
    </div>
  );
}

export default Courses;