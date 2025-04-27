import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import backLogo from '../../images/back-logo.png';
import help from '../../images/help-logo.svg';
import logout from '../../images/logout-logo__default.svg';
import profile from '../../images/profile-logo__default.svg';
import orders from '../../images/orders-logo__default.svg';
import favorite from '../../images/favorite-logo__default.svg';
import viewed from '../../images/eye-logo__default.svg';
import delivery from '../../images/delivery-logo__default.svg';
import Footer from '../Footer/Footer';
import PersonalData from '../PersonalData/PersonalData';
import MyOrders from '../MyOrders/MyOrders';
import Favourites from '../Favourites/Favourites';
import Viewed from '../Viewed/Viewed';
import Delivery from '../Delivery/Delivery';

function Profile(props) {
    const [child, changeChild] = useState('PersonalData');

    //className={`menu ${props.isOpen ? 'visibly' : ''}`} 

    return (
        <>
            <section className="profile" >
                <Link to="/" className='profile__back-link'>
                    <img className='profile__back-logo' src={backLogo} alt='назад' />
                    <p className='profile__back-title'>Личный кабинет</p>
                </Link>
                <section className='profile__data-container'>
                    <div className='profile__info-container'>
                        <img className='profile__avatar' src={props.avatar} alt='Изображение профиля' />
                        <div className='profile__text-block'>
                            <p className='profile__name'>{props.name}</p>
                            <p className='profile__login'>{props.login}</p>
                        </div>
                    </div>
                    <div className='profile__text-block'>
                        <h3 className='profile__title'>Заказы</h3>
                        <p className='profile__info'>{props.ordersNum}</p>
                    </div>
                    <div className='profile__text-block'>
                        <h3 className='profile__title'>Персональная скидка<img className='profile__help-logo' src={help} alt='уточнить' /></h3>
                        <p className='profile__info'>{props.discount}</p>
                    </div>
                    <Link className='profile__logout-button' path='/'>
                        <img className='profile__logout-logo' src={logout} alt='выход' />
                        <h3 className='profile__logout-title'>Выйти</h3>
                    </Link>
                </section>
                <section className='profile__container'>
                    <ul className='profile__navigation'>
                        <li className={`profile__li ${child === 'PersonalData' ? 'profile__focused-li' : ""}`}
                            onClick={() => { changeChild('PersonalData') }}>
                            <img className='profile__li-img' src={profile} alt='Личный кабинет' />
                            <h3 className='profile__li-title'>Личные данные</h3>
                        </li>
                        <li className={`profile__li ${child === 'MyOrders' ? 'profile__focused-li' : ""}`}
                            onClick={() => { changeChild('MyOrders') }}>
                            <img className='profile__li-img' src={orders} alt='Мои заказы' />
                            <h3 className='profile__li-title'>Мои заказы</h3>
                        </li>
                        <li className={`profile__li ${child === 'Favourites' ? 'profile__focused-li' : ""}`}
                            onClick={() => { changeChild('Favourites') }}>
                            <img className='profile__li-img' src={favorite} alt='Избранное' />
                            <h3 className='profile__li-title'>Избранное</h3>
                        </li>
                        <li className={`profile__li ${child === 'Viewed' ? 'profile__focused-li' : ""}`}
                            onClick={() => { changeChild('Viewed') }}>
                            <img className='profile__li-img' src={viewed} alt='Ранее просмотренные' />
                            <h3 className='profile__li-title'>Ранее просмотренные</h3>
                        </li>
                        <li className={`profile__li ${child === 'Delivery' ? 'profile__focused-li' : ""}`}
                            onClick={() => { changeChild('Delivery') }}>
                            <img className='profile__li-img' src={delivery} alt='Доставка' />
                            <h3 className='profile__li-title'>Доставка</h3>
                        </li>
                    </ul>
                    {child === 'PersonalData' ?
                        <PersonalData /> :
                        child === 'MyOrders' ?
                            <MyOrders /> :
                            child === 'Favourites' ?
                                <Favourites /> :
                                child === 'Viewed' ?
                                    <Viewed /> :
                                    child === 'Delivery' ?
                                        <Delivery /> : <></>
                    }
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Profile;