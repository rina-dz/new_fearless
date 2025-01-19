import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPopup.css';
import mainLogo from '../../images/menu/logo.svg';


function MenuPopup(props) {

    //проверить работу ссылок контактов
    //добавить анимку ховера для логотипов 

    // вернуть все логотипы в Link перед li
    //<img className='menu__logo' src={ } alt="" />

    // добавить закрытие попапа

    //className={`popup ${props.isOpen ? 'popup_opened' : ''}`}

    return (
        <section className={`menu ${props.isOpen ? 'visibly' : ''}`}>
            <button className='menu__close-logo' onClick={props.onClose} />
            <div className='menu__container'>
                <ul className='menu__ul'>
                    <h3 className='menu__title'>Навигация</h3>
                    <Link to="/">
                        <li className='menu__link'>Каталог</li>
                    </Link>
                    <Link to="/">
                        <li className='menu__link'>Тех.поддержка</li>
                    </Link>
                    <Link to="/">
                        <li className='menu__link'>Индивидуальный заказ</li>
                    </Link>
                    <Link to="/">
                        <li className='menu__link'>О компании</li>
                    </Link>
                </ul>
                <ul className='menu__ul'>
                    <h3 className='menu__title'>Контакты</h3>
                    <Link to="mailto:fearless@shop.ru">
                        <li className='menu__link'>fearless@shop.ru</li>
                    </Link>
                    <Link to="tel:+79099999999">
                        <li className='menu__link'>+7 (909) 999-99-99</li>
                    </Link>
                    <Link to="https://yandex.ru/maps/-/CHaaQC83">
                        <li className='menu__link'>г.Казань, ул.Казанская, 42</li>
                    </Link>
                </ul>
                <ul className='menu__media'>
                    <h3 className='menu__title'>Социальные сести</h3>
                    <Link className='menu__icon menu__tg-icon' to="https://web.telegram.org/" />
                    <Link className='menu__icon menu__inst-icon' to="https://www.instagram.com/" />
                    <Link className='menu__icon menu__vk-icon' to="https://m.vk.com/" />
                </ul>
            </div>
            <img className='menu__main-logo' src={mainLogo} alt='Логотип Fearless' />
        </section>
    )
}

export default MenuPopup;