import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPopup.css';
import { usePopupClose } from "../../hooks/usePopupClose.js";
import mainLogo from '../../images/menu/logo.svg';


function MenuPopup(props) {

    //проверить работу ссылок контактов
    //добавить анимку ховера для логотипов 

    // вернуть все логотипы в Link перед li
    //<img className='menu__logo' src={ } alt="" />

    usePopupClose(props.isOpen, props.onClose);

    return (
        <aside className={`menu ${props.isOpen ? 'visibly' : ''}`}>
            <section className={`menu__main-section ${props.isOpen ? 'visible-section' : ''}`}>
                <button className='menu__close-logo' onClick={props.onClose} />
                <div className='menu__container'>
                    <ul className='menu__ul'>
                        <h3 className='menu__title'>Навигация</h3>
                        <Link to="/">
                            <li className='menu__link cataloge-logo'>Каталог</li>
                        </Link>
                        <Link to="/">
                            <li className='menu__link support-logo'>Тех.поддержка</li>
                        </Link>
                        <Link to="/">
                            <li className='menu__link order-logo'>Индивидуальный заказ</li>
                        </Link>
                        <Link to="/">
                            <li className='menu__link info-logo'>О компании</li>
                        </Link>
                    </ul>
                    <ul className='menu__ul'>
                        <h3 className='menu__title'>Контакты</h3>
                        <Link to="mailto:fearless@shop.ru">
                            <li className='menu__link mail-logo'>fearless@shop.ru</li>
                        </Link>
                        <Link to="tel:+79099999999">
                            <li className='menu__link number-logo'>+7 (909) 999-99-99</li>
                        </Link>
                        <Link to="https://yandex.ru/maps/-/CHaaQC83">
                            <li className='menu__link adress-logo'>г.Казань, ул.Казанская, 42</li>
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
        </aside>
    )
}

export default MenuPopup;