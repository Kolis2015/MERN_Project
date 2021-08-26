import React from 'react';
import {Link} from '@reach/router';

const Header = (props) => {

    return (
        <div className="header">
            <span className="header-left"><img src="../../logo.png" alt="logo"/></span>
            <span className="navbar">  
                <ul className="ul">
                    <li className="li"><a className="a" href="/Home">Home</a></li>
                    <li className="li"><a className="a" href="/Designer">Designer</a></li>
                    <li className="li">Purchaser</li>
                    <li className="li"><a className="a" href="/About">About</a></li>
                </ul>
            </span>
            <span className="header-right"> 
                <Link className="link" to={"/logreg"}>login</Link>  
                <span className="seperator">||</span> 
                    <Link className="link" to={"/logreg"}>register</Link>
                </span>
            </div>
    )
}

export default Header;

