import React from 'react'
import { Link, navigate} from '@reach/router'

const DesignerLoggedIn = () => {
    
        return (
            <div >
                {<img className="siteLogo" src="" alt="site logo" />}
                <div className = "navContainer">
                <ul className="nav">
                    <li className="navList"><Link className="navLink" to = "/home">Home</Link></li>
                    <li className="navList"><Link  className="navLink" to="/loggedin">Designer</Link></li>
                    <li className="navList"><Link className="navLink" to = "/about">About</Link></li>
                </ul>
            </div>
                <Link to="/logreg" className="designerLogOut">logout</Link>
                <div className="loggedInContainer">
                    <p className = "welcomeText">Hello Fellow Artist</p>
                    <p className = "welcomeText">Thank you for using StylistA5.com</p>
                    <p className="paragraphtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente magni eveniet voluptatum porro soluta quidem ducimus dolore</p>
                    <p className = "designerMessage">Ready Set Go!</p>
                    <button className="designBtn" onClick={() => navigate('/uploaddesign')}>Upload a Design</button>
                </div>
            </div>
        )
    };





export default DesignerLoggedIn