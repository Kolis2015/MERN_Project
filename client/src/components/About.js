import React, {useState} from "react";
import axios from "axios";
import {navigate} from "@reach/router";
import Header from "./Header2";
import { LoremIpsum } from 'react-lorem-ipsum';

const About = (props) => {

    return (
		<div className="wrapper">
			<Header />
			<div className="component-container">
                <h3>What is StylistA5?</h3>
                <span className="component-message">
                    <LoremIpsum p={1} />
                </span>
                <h3>StylistA5 Team:</h3>
                <span className="component-message">
                    <div className="holder">
                        <span className="holder-at-left"><LoremIpsum p={1} /></span>
                        <span className="holder-at-right"><img src="../../team.jpg" alt="team"/></span>
                    </div>
                </span>
                <h3>How to participate:</h3>
                <span className="component-message">
                    <LoremIpsum p={1} />
                </span>
			</div> {/* end of component container */}
		</div>
	)
}

export default About;