import React from 'react';
import './SearchPopup.css';
import { Link } from 'react-router-dom';
import SearchCard from '../SearchCard/SearchCard';
import allItems from '../../vendor/allItems';
import { usePopupClose } from "../../hooks/usePopupClose.js";


function SearchPopup(props) {

    usePopupClose(props.isOpen, props.onClose);
    //добавить закрытие таблицы поиска при нажатии вне секции

    return (
        <section className={`search ${props.isOpen ? 'visibly' : ''}`}>
            <div className='search__cards-container'>
                {allItems.map((el) => (
                    <SearchCard img={el.img} type={el.band} title={el.title} price={el.price} />
                ))}
            </div>
            <div className='search__text-container'>
                <p className='search__info'>Не нашли что искали? Поищите в каталоге или воспользуйтесь функцией индивидуального заказа</p>
                <div className='search__links-container'>
                    <Link className='search__link cataloge-logo' to='/'>Каталог</Link>
                    <Link className='search__link order-logo' to='/'>Индивидуальный заказ</Link>
                </div>
            </div>
        </section>
    )
}

export default SearchPopup;