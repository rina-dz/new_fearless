import React from 'react';
import Bands from '../Bands/Bands';
import Advertising from "../Advertising/Advertising";
import Footer from '../Footer/Footer';
import CardsList from '../CardsList/CardsList';
import popularItems from '../../vendor/items';
import preorderItems from '../../vendor/preorderItems';

function Main(props) {

    return (
        <>
            <Bands />
            <CardsList title='Популярные товары' items={popularItems} />
            <CardsList title='Новинки' items={preorderItems} />
            <Advertising />
            <Footer />
        </>
    )
}


export default Main;