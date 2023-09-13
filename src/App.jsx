import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';

import Tienda from './pages/Tienda/tienda';
import Nosotros from './pages/Nosotros/nosotros';
import Home from './pages/Home/home';

import './App.css';

export default function App() {
  return (
    <div className="">
      <header>
        <NavBar />
      </header>
      <div className="container-main">
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tienda" element={<Tienda />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}
