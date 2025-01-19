import './App.css';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import MenuPopup from '../MenuPopup/MenuPopup';


import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';



function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false) 


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header openMenu={() => {setMenuPopupOpen(!isMenuPopupOpen)}} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MenuPopup isOpen={isMenuPopupOpen} onClose={() => {setMenuPopupOpen(false)}} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
