import React, { useState } from 'react'
import axios from 'axios'
import { navigate} from '@reach/router'

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
        console.log(res.cookie);
        console.log(res);
        console.log(res.data, 'is res data!');
        navigate("/loggedin")
        })
        .catch(err => {
            console.log(err.response);
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
        });
    };


    return (
        <>
        {
            <img className="siteLogo" src="" alt="site logo"/>  
            }
            <form onSubmit={login}>
                <p>If you already have an account, please login.</p>
                <p className="error-text">{errorMessage ? errorMessage : ""}</p>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="UserName"
                        value={UserName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        name="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            
                <button type="submit">Sign In</button>
        
        </form>
        </>
    )
}

export default Login