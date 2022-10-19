
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Slide from './home';
import Vender from './Vender';
import Contact from './Contact';
import Comprar from './Comprar';
import Footer from './Footer';

function App() {
  return (
    <div>
    <div >
  <Router>
    <nav className='nav'>
    <img className="logo" src="https://cdn.glitch.me/5539ba06-aed1-42cf-9a61-66f8d214a4d8%2Frosa1.ico?v=1637437878766" alt="logo"/> 
      <Link className="link" to = "/vender"> Vender</Link>
      <Link className="link" to = "/comprar"> Comprar</Link>
      <Link  className="link" to= "/">Home </Link>
      <Link className="link" to="/contactos">Contactos</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Slide/>}></Route>
      <Route path='/vender' element={<Vender/>}></Route>
      <Route path='/comprar' element={<Comprar/>}></Route>
      <Route path='/contactos' element={<Contact/>}></Route>
    </Routes>
  </Router>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
