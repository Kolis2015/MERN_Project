import React from 'react';
import {Link} from '@reach/router';

const HeaderSimple = (props) => {

    return (
        <div className="header">
            <span className="header-left"><img src="../../logo.png" alt="logo"/></span>
            <span className="header-right"><Link className="link" to={"/Home"}>back to home</Link></span>
        </div>
    )
}

export default HeaderSimple;