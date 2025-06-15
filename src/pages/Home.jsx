import Accordion from '../components/Accordion';

function Home() {
  const danzas = [
    { region: 'La Paz', nombre: 'Saya' },
    { region: 'Cochabamba', nombre: 'Cueca' },
    { region: 'Santa Cruz', nombre: 'Taquirari' },
    { region: 'Oruro', nombre: 'Diablada' },
    { region: 'Potosí', nombre: 'Morenada' }
  ];

  return (
    <section style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Bienvenido a la Academia</h2>
      {danzas.map((danza, idx) => (
        <Accordion key={idx} title={danza.region} content={`Danza típica: ${danza.nombre}`} />
      ))}
    </section>
  );
}

export default Home;

