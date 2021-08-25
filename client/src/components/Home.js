import React, {useState} from "react";
import axios from "axios";
import {navigate} from "@reach/router";
import Header from "./Header2";
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = (props) => {
    

    return (
		<div className="wrapper">
			<Header />
			<div className="component-container">
                {/* center image */}
                <span className="welcome-img"><img src="../../welcome.jpg" alt="welcome"/></span>
                {/* title and content */}
                <h3>StylistA5</h3>
                <span className="component-message">
                    <LoremIpsum p={1} />
                </span>
			</div> {/* end of component container */}
		</div>
	)
}

export default Home;