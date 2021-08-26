import React from "react";
import { Link, navigate} from "@reach/router";
import Header from "./Header2";
import { LoremIpsum } from 'react-lorem-ipsum';

const DesignerLoggedIn = (props) => {

    return (
            <div className="wrapper">
                <Header />
                <div className="component-container">
                    <h3>Hello fellow Artist!</h3>
                    <span className="component-message">
                        Thanks for using StylistA5.com...
                    </span>
                    <span className="component-message">
                        <LoremIpsum p={1} />
                    </span>
                    <h4>Ready, Set, Go!</h4>
                    <button className="designBtn" onClick={() => navigate('/uploaddesign')}>Upload a Design</button>
                </div> {/* end of component container */}
            </div>
        )
    }

export default DesignerLoggedIn