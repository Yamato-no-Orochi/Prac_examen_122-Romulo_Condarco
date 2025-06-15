import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;