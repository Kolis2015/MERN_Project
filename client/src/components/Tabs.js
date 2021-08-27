import { useState } from "react";
import UploadDesign from "./UploadDesign";
// import ManageDesign from "./ManageDesign";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Upload Design</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Manage Design</button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Find New Gig</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <UploadDesign />
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <img src="../../comingSoon.png" alt="logo"/>
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <img src="../../comingSoon.png" alt="logo"/>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
