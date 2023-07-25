import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Auth/Signup';

import Container from './pages/Container';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
    <Route exact path="/*" element={<Container/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
   
    
    </div>
  );
}

export default App;
