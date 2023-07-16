import './App.css';
import Nav from './component/Nav';
import Home from './pages/Home';


import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
