import React from "react";
import './Advertising.css';
import { Link } from 'react-router-dom';

function Advertising() {

    return (
        <aside className="ad">
            <Link className="ad__button" to="/" />
        </aside>
    )
}

export default Advertising;