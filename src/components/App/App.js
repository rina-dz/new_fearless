import './App.css';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import BandPage from '../BandPage/BandPage';
import MenuPopup from '../MenuPopup/MenuPopup';
import Profile from '../Profile/Profile.js';
import SearchPopup from '../SearchPopup/SearchPopup.js';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ateezImg from '../../images/bands/ateez-img.svg';
import avatar from '../../images/avatar.svg';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [isSearchPopupOpen, setSearchPopupOpen] = React.useState(false);


  // прописать добавление информации о пользователе через setCurrentUser


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      <Header openMenu={() => {setMenuPopupOpen(!isMenuPopupOpen)}} changeSearchVisibility={() => {setSearchPopupOpen(!isSearchPopupOpen)}} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ateez" element={<BandPage bandName='Ateez' mainImg={ateezImg}  />} />
          <Route path='/profile' element={
            <Profile avatar={avatar} name='Григорий' login='grechkunov11' ordersNum='7' discount='15%'
            />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MenuPopup isOpen={isMenuPopupOpen} onClose={() => {setMenuPopupOpen(false)}} />
        <SearchPopup isOpen={isSearchPopupOpen} onClose={() => {setSearchPopupOpen(false)}} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
