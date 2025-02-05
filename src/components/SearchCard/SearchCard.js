import React from 'react';
import './SearchCard.css';
import { Link } from 'react-router-dom';

function SearchCard(props) {



    return (
        <Link className='search-card'>
        <img className='search-card__image' src={props.img} alt='Изображение товара' />
        <div className='search-card__info-container'>
            <p className='search-card__type'>{props.type}</p>
            <h3 className='search-card__title'>{props.title}</h3>
            <p className='search-card__price'>{props.price}</p>
        </div>
        <div className='search-card__icon-container'>
            <button className='search-card__icon search-card__fav-icon' />
            <button className='search-card__icon search-card__cart-icon' />
        </div>
        </Link>
    )

}

export default SearchCard;