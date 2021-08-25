import React, { useState } from 'react'
import axios from 'axios'
import { navigate} from '@reach/router'

const Register = () => {
const [confirmReg, setConfirmReg] = useState("");
const [errs, setErrs] = useState({});

const [ user, setUser ] = useState({
    UserName: "", 
    Password: "", 
    })

    const handleChange = (e) => {
    setUser({
        UserName: user.UserName,
        Password: user.Password,
        [e.target.name]: e.target.value,
    })
    }

    const register = e => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/User", 
        user,             
        {
        withCredentials: true,
        })
        .then(res => {
        console.log(res.data);


        setUser({
            UserName: "",
            Password: "", 
        })

        setConfirmReg("Thank you for Registering, you can now log in!");
            setErrs({});  // remember to reset errors state if it was successful
            navigate('/loggedin')
        })
        .catch((err) => {
        console.log(err.response.data);
        setErrs(err.response.data.errors);
        });
    };


    return (
        <>
            <form onSubmit={register}>
            {
            confirmReg ? 
                <h4>{confirmReg}</h4>
                : null
            }
                <p>If you do not have an account please create one.</p>
                <p>Job Function</p>
                <input type="radio" name="designStyle" value="designer"/>
                <label for="html">Designer</label>
                <input type="radio" name="designStyle" disabled value="purchaser"/>
                <label for="html">Purchaser</label>
                <div>
                {
						errs.UserName ? 
							<p>{errs.UserName.message}</p>
							: null
					}
                    <label>Username</label>
                    <input
                        type="text"
                        name="UserName"
                        value={user.UserName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                {
						errs.Password ? 
							<p>{errs.Password.message}</p>
							: null
					}
                    <label>Password</label>
                    <input 
                        type="Password"
                        name="Password"
                        value={user.Password}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            
                <button type="submit">Register</button>
        
        </form>
        </>
    )
}

export default Register