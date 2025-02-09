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
        //changeButtonVisibility(true);
        setNewValue(e.target.value);
        //value ? changeButtonVisibility(true) : changeButtonVisibility(false);
    }

    function focuseForm() {
        changeButtonVisibility(true)
        props.changeSearchVisibility();
    }

    function unfocuseForm() {
        changeButtonVisibility(false)
        props.changeSearchVisibility();
    }

    function deleteInputValue() {
        setNewValue("");
        changeButtonVisibility(false);
        props.changeSearchVisibility();
    }

    //onChange={handleNewValue}
    //value={value || ""}
    //onFocus={() => {changeButtonVisibility(true)}}

    return (
        <header className='header'>
            <div className='header__main-container'>
                <Link className='header__main-logo header__logo' to="/" />
                <div className='header__functional-container'>
                    <form className='header__search' onFocus={focuseForm} onBlur={unfocuseForm}>
                        <input className='header__search-input' placeholder='Начни вводить название товара...' 
                        value={value || ""} onChange={handleNewValue} />
                        <img className={buttonVisibility ? "header__search-button" : "header__search-button visibility-off"}
                            id='button' src={search_icon}
                            alt='Удалить' onClick={deleteInputValue}
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
                            <button className='header__menu-link header__logo' onClick={props.openMenu} />
                        </li>
                    </ul>
                </div>
            </div>
        </ header>
    )
}

export default Header;