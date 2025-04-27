import React, { useState } from 'react';
import { userInfo } from '../../utils/userInfo';
import './PersonalData.css';
import pencil_icon from '../../images/pencil-icon.svg';
import password_icon from '../../images/hidden_password-icon.svg';

function PersonalData() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <section className='data-section'>
                <dl className='data-section__dl'>
                    <dt className='data-section__dt'>Имя</dt>
                    <dd className='data-section__dd'>{userInfo.name}</dd>
                    <dt className='data-section__dt'>Email</dt>
                    <dd className='data-section__dd'>{userInfo.email}</dd>
                    <dt className='data-section__dt'>Телефон</dt>
                    <dd className='data-section__dd'>{userInfo.number}</dd>
                    <dt className='data-section__dt'>Логин</dt>
                    <dd className='data-section__dd'>{userInfo.login}</dd>
                    <dt className='data-section__dt'>Пароль</dt>
                    <dd className='data-section__dd'>{userInfo.password}
                        <img className='data-section__dd-icon' src={password_icon} alt='Скрыть пароль' />
                    </dd>
                </dl>
                <button className='data-section__button'>
                    <img className='data-section__button-icon' alt='Кисть' src={pencil_icon} />
                    <p className='data-section__button-text'>Редактировать профиль</p>
                </button>
            </section>
        </>
    )
}

export default PersonalData;