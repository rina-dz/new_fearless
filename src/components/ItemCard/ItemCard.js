import React from 'react';
import './ItemCard.css';
import { Link } from 'react-router-dom';
import preorder from '../../images/cardItem/preorder.svg';

function ItemCard(props) {

    // дописать работу лайка и корзины
    
    return (
        <Link className='card' to={props.link}>
            <img className='card__image' src={props.img} alt='Изображение товара' />
            <img className={`card__preorder-logo ${props.isPreorder ? 'visibility' : ""} `} alt='Знак презаказа' src={preorder} />
            <p className='card__band'>{props.band}</p>
            <p className='card__title'>{props.title}</p>
            <div className='card__container'>
                <p className='card__price'>{props.price}</p>
                <button className='card__icon card__like' />
                <button className='card__icon card__cart' />
            </div>
        </Link>
    )
}

export default ItemCard;