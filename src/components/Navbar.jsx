import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#ddd', padding: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
      <Link to="/cursos">Oferta de cursos</Link>
    </nav>
  );
}

export default Navbar;