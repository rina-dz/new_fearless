import React from 'react';
import './Bands.css';
import { Link } from 'react-router-dom';

// добавить правильные ссылки

function Bands() {

    return (
        <section className='bands'>
        <Link className='bands__first-img bands__img' to="/" />
        <Link className='bands__second-img bands__img' to="/" />
        <Link className='bands__third-img bands__img' to="/" />
        <Link className='bands__fourth-img bands__img' to="/" />
        <Link className='bands__fifth-img bands__img' to="/" />
        </section>
    )
}

export default Bands;