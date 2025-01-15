import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import search_icon from '../../images/header__close.svg';

// дописать схему навигации в main-nav в зависимости от состояния переменной isLogged
// дописать адекватную работу крестика

function Header(props) {
    const [value, setNewValue] = React.useState("");
    const [buttonVisibility, changeButtonVisibility] = React.useState(false);

    function handleNewValue(e) {
        changeButtonVisibility(true);
        setNewValue(e.target.value);
        value ? changeButtonVisibility(true) : changeButtonVisibility(false);
    }

    return (
        <header className='header'>
            <div className='header__main-container'>
                <Link className='header__main-logo header__logo' to="/" />
                <div className='header__functional-container'>
                    <form className='header__search'>
                        <input className='header__search-input' placeholder='Начни вводить название товара...'
                            onChange={handleNewValue} value={value || ""} />
                        <img className={buttonVisibility ? "header__search-button" : "header__search-button visibility-off"}
                            id='button' src={search_icon}
                            alt='Удалить' onClick={() => { setNewValue(""); changeButtonVisibility(false) }}
                        />
                    </form>
                    <ul className='header__main-nav'>
                        <li>
                            <Link className='header__profile-link header__logo' to="/profile" />
                        </li>
                        <li>
                            <Link className='header__bag-link header__logo' to="/my-bag" />
                        </li>
                        <li>
                            <button className='header__menu-link header__logo' />
                        </li>
                    </ul>
                </div>
            </div>
        </ header>
    )
}

export default Header;