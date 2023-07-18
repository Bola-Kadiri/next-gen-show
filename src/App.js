import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';


import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Talents from './pages/Talents';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/faq" element={<Faq/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/talent" element={<Talents/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
