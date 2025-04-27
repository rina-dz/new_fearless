import React from 'react';
import './BandPage.css';
import Advertising from "../Advertising/Advertising";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import backLogo from '../../images/back-logo.png';
import ItemCard from '../ItemCard/ItemCard';
import AllItems from '../../vendor/allItems';
import filterArrow from '../../images/filter-arrow.svg';

// создать общий файл для всех карт, где будет сортировка по группам и другим факторам 
// добавить виды фильтрации и сортировки 

function BandPage(props) {

    return (
        <section className='band-page'>
            <Link to="/cataloge" className='band-page__back-link'>
                <img className='band-page__back-logo' src={backLogo} alt='назад к катологу' />
                <p className='band-page__back-title'>Каталог</p>
                <p className='band-page__band-name'>{props.bandName}</p>
            </Link>
            <img className='band-page__main-img' src={props.mainImg} alt='изображение группы' />
            <div className='band-page__filters-container'>
                <div className='band-page__filter-container'>
                    <p className='band-page__filter'>Вид товара</p>
                    <img className='band-page__arrow' src={filterArrow} alt='развернуть' />
                </div>
                <div className='band-page__filter-container'>
                    <p className='band-page__filter'>Сортировать</p>
                    <img className='band-page__arrow' src={filterArrow} alt='развернуть' />
                </div>
            </div>
            <div className='band-page__items-container'>
                {AllItems.map((el) => (
                    <ItemCard img={el.img} isPreorder={el.isPreorder} band={el.band} title={el.title} price={el.price} />
                ))}
            </div>
            <Advertising />
            <Footer />
        </section>
    )
}


export default BandPage;