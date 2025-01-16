import React from "react";
import './Advertising.css';
import { Link } from 'react-router-dom';

function Advertising() {

    return (
        <div className="ad">
            <Link className="ad__button" to="/" />
        </div>
    )
}

export default Advertising;