import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Auth/Signup';

import Container from './pages/Container';
import Login from './pages/Auth/Login';
import ConfirmSignUp from './pages/Auth/ConfirmSignUp';
import AccountStageOne from './pages/Auth/AccountStageOne';
import AccountStageTwo from './pages/Auth/AccountStageTwo';
import AccountCareerBuilder from './pages/Auth/AccountCareerBuilder';
import AccountPortfolio from './pages/Auth/AccountPortfolio';
import ProfileOne from './pages/Profile/ProfileOne';
import ProfileTwo from './pages/Profile/ProfileTwo';
import JoinEventOne from './pages/join-events/JoinEventOne';
import JoinEventTwo from './pages/join-events/JoinEventTwo';




function App() {
  return (
    <div className='app'>  
    <BrowserRouter>
    <Routes>
    <Route exact path="/*" element={<Container/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/cofirmSignup" element={<ConfirmSignUp/>}/>
    <Route exact path="/stage-one" element={<AccountStageOne/>}/>
    <Route exact path="/stage-two" element={<AccountStageTwo/>}/>
    <Route exact path="/build-career" element={<AccountCareerBuilder/>}/>
    <Route exact path="/account-portfolio" element={<AccountPortfolio/>}/>
    <Route exact path="/profile-one" element={<ProfileOne/>}/>
    <Route exact path="/profile-two" element={<ProfileTwo/>}/>
    <Route exact path="/join-event-one" element={<JoinEventOne/>}/>
    <Route exact path="/join-event-two" element={<JoinEventTwo/>}/>

    </Routes>
    </BrowserRouter>
    
   
    
    </div>
  );
}

export default App;
