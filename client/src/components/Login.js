import React, { useState } from 'react'
import axios from 'axios'
import { navigate} from '@reach/router'
import Header from "./HeaderSimple";
import Register from "./Register";

const Login = () => {

    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const login = event => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/User/login", { 
            UserName: UserName, 
            Password: Password,
        },
        {
        // this will force the sending of the credentials / cookies so they can be updated
        //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
        //    unless withCredentials is set to true before making the request
        withCredentials: true
        })
        .then((res) => {
            console.log("____________________" + res.data.cookie);
            console.log(res);
            console.log(res.data, 'is res data!');
            localStorage.setItem("userLoggedIn", res.data.userLoggedIn);
            console.log("res.data.userLoggedIn = " + res.data.userLoggedIn);
            console.log(res.data.token);
            // navigate(`/loggedin/${res.data.userLoggedIn}`)
            navigate("/loggedin/ByUserID")
        })
        .catch(err => {
            console.log(err.response);
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
        });
    };


    return (
		<div className="wrapper">
			<Header />
			<div className="component-container">
                {/* login */}
                <h4>If you already have an account, please login.</h4>
                <form className="frm-upload" onSubmit={login}>
                    <div className="info-bundle"> 
                        <label className="info-bundle-label">Username</label>
                        <input className="info-bundle-textbox" type="text" name="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)}/>
                        <span className="error-text">{errorMessage ? errorMessage : ""}</span>
                    </div>
                    <div className="info-bundle"> 
                        <label className="info-bundle-label">Password</label>
                        <input className="info-bundle-textbox" type="password" name="Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="hold-button-at-right">
                        {/* Meltem, change this to link.  Can a link trigger submit???  Try and learn monkkey!!!
                        Also it should not move around drastically when there is an error message shown.  This is bothersome.  
                        Must be fixed before go-live date!!!*/}
                        <button className="btn-login-register" type="submit">Login</button>
                    </div>
                </form>
			</div> {/* end of component container */}
            <div className="component-container">
                {/* register */}
                <Register />
            </div>
		</div>
	)
}

export default Login