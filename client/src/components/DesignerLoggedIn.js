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
                    <br />
                    <span className="component-message">
                        Thanks for using StylistA5.com...
                    </span>
                    <br /><br />
                    <span className="component-message">
                        <LoremIpsum p={1} />
                    </span><br /><br /><br />
                    <div className="hold-button-at-right">
                            <h4>Ready, Set, Go!</h4>
                            <button className="btn-upload-design" onClick={() => navigate('/uploaddesign')}>Upload a Design</button>
                    </div>
                </div> {/* end of component container */}
            </div>
        )
    }

export default DesignerLoggedIn