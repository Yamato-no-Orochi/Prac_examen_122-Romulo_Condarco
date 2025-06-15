import { useState } from 'react';

function CourseCard({ titulo, descripcion, precio, imagen }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '30%' }}>
      <img src={`/src/assets/${imagen}`} alt={titulo} style={{ width: '100%' }} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button onClick={() => setShow(true)}>Ver Precio</button>

      {show && (
        <div style={{ background: '#00000088', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{ background: 'white', padding: '2rem', margin: '5rem auto', width: '300px' }}>
            <h4>{titulo}</h4>
            <p>Precio: {precio}</p>
            <button onClick={() => setShow(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;