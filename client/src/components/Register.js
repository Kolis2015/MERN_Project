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

        setConfirmReg("Thank you for registering, you may now log in!");
            setErrs({});  // remember to reset errors state if it was successful
            navigate('/loggedin')
        })
        .catch((err) => {
            console.log(err.response.data);
            setErrs(err.response.data.errors);
        });
    };

    return (
        <div className="wrapper">
            <div className="component-container-second-component">
                {/* register */}
                <h4>If you do not have an account please create one and join us.</h4>
                <form className="frm-upload" onSubmit={register}>
                    {confirmReg ? 
                        <h4>{confirmReg}</h4>
                        : null
                    }
                    <div className="info-bundle"> 
                        <label className="info-bundle-label">Jub Function</label>
                        <input type="radio" name="designStyle" value="designer"/>
                        <label className="info-bundle-label">Designer</label>
                        <input type="radio" name="designStyle" disabled value="purchaser"/>
                        <label className="info-bundle-label">Purchaser</label>
                    </div>
                    <div className="info-bundle"> 
                        <label className="info-bundle-label">Username</label>
                        <input className="info-bundle-textbox" type="text" name="UserName" value={user.UserName} onChange={(e) => handleChange(e)}/>
                        <span className="error-text">{errs.UserName ? errs.UserName.message : null}</span>
                    </div>
                    <div className="info-bundle"> 
                        <label className="info-bundle-label">Password</label>
                        <input className="info-bundle-textbox" type="Password" name="Password" value={user.Password} onChange={(e) => handleChange(e)}/>
                        <span className="error-text">{errs.Password ? errs.Password.message : null}</span>
                    </div>
                    <div className="hold-button-at-right">
                        <button className="btn-login-register" type="submit">Register</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Register;