import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import About from './pages/About';
import Home from './pages/Home';


import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
