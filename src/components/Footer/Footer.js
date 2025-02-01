import React from 'react';
import './Footer.css';
import logo from '../../images/footer__logo.svg';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__main-container'>
                <nav className='footer__text-container'>
                    <ul className='footer__ul'>
                        <h3 className='footer__title'>Навигация</h3>
                        <Link to="/"><li className='footer__link'>Главная страница</li></Link>
                        <Link to="/"><li className='footer__link'>Каталог</li></Link>
                        <Link to="/"><li className='footer__link'>Личный кабинет</li></Link>
                        <Link to="/"><li className='footer__link'>Тех. Поддержка</li></Link>
                        <Link to="/"><li className='footer__link'>О компании</li></Link>
                        <Link to="/"><li className='footer__link'>FAQ</li></Link>
                    </ul>
                    <ul className='footer__ul'>
                        <h3 className='footer__title'>Документация</h3>
                        <Link to="/"><li className='footer__link'>Договор оферты и политика конфиденциальности</li></Link>
                        <Link to="/"><li className='footer__link'>Пользовательское соглашение</li></Link>
                    </ul>
                    <ul className='footer__media'>
                        <h3 className='footer__title'>Социальные сести</h3>
                        <Link className='footer__icon footer__tg-icon' to="https://web.telegram.org/" />
                        <Link className='footer__icon footer__inst-icon' to="https://www.instagram.com/" />
                        <Link className='footer__icon footer__vk-icon' to="https://m.vk.com/" />
                    </ul>
                </nav>
                <img className='footer__logo' src={logo} alt='логотип fearless' />
            </div>
            <div className='footer__copyright-container'>
                <p className='footer__copyright'>Fearless  c  2024 Все права защищены</p>
                <p className='footer__copyright'>ИП Сидоров Иван Федорович, ИНН 111111111111, ОРГНИП 111111111111111</p>
            </div>
        </footer>
    )
}

export default Footer;