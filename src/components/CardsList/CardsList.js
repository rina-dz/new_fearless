import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './CardsList.css';

function CardsList(props) {


    
    //<ItemCard img={card} isPreorder={true} band='BTS/J-hope/Альбом'
    //title='Альбом J-hope - Jack In The Box, HOPE Edition' price="2498₽" />
    //img={el.img}

    return (
        <section className='list'>
            <h2 className='list__title'>{props.title}</h2>
            <button className='list__button list__left-arrow' />
            <button className='list__button list__right-arrow' />
            <div className='list__cards-container'>
                {props.items.map((el) => (
                    <ItemCard img={el.img} isPreorder={el.isPreorder} band={el.band} title={el.title} price={el.price} key={el.title} />
                ))}
            </div>
        </section>
    )
}

export default CardsList;