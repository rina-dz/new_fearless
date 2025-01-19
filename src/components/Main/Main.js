import React from 'react';
import Bands from '../Bands/Bands';
import Advertising from "../Advertising/Advertising";
import Footer from '../Footer/Footer';
import ItemCard from "../ItemCard/ItemCard";

import card from '../../vendor/items/img-1.svg'

function Main(props) {

    return (
        <>
            <Bands />
            <ItemCard img={card} isPreorder={true} band='BTS/J-hope/Альбом'
                title='Альбом J-hope - Jack In The Box, HOPE Edition' price="2498₽" />
            <Advertising />
            <Footer />
        </>
    )
}


export default Main;