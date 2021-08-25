import React, {useState} from "react";
import axios from "axios";
import {navigate} from "@reach/router";
import Header from "./Header2";
import Tabs from "./Tabs";
import { LoremIpsum } from 'react-lorem-ipsum';

const Designer = (props) => {
    

    return (
		<div className="wrapper">
			<Header />
			<div className="component-container">
                <Tabs />
			</div> {/* end of component container */}
		</div>
	)
}

export default Designer;