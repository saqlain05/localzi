import React, { useState } from 'react'
import '../style/Login.css'
import {NavLink, useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock , faUser, faEyeSlash , faComment} from '@fortawesome/fontawesome-free-solid'
import { faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons' 
const Login = () => {
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    return (
        <>
        <div className ="main_div" >
        <div className="circle">
            {/* <div className="circle1"> 🔪 </div> */}
            <div className="circle1">  
            <FontAwesomeIcon icon={faFacebookF} />
            
      </div>
            <div className="circle2"> <FontAwesomeIcon icon={faGoogle} /> </div>
        </div>
            <form className="form"> 
                <div className="first">
                <p className="icon"> <FontAwesomeIcon icon={faUser} /> </p>
                <input className="linput" placeholder="USER NAME" type="text" 
                 value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                 />
                <p className="icon3"></p>
                </div>
                <div className="second">
                <p className="icon"> <FontAwesomeIcon icon={faLock} /> </p>
                <input className="linput" placeholder="PASSWORD" type="password"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}

                />
                <p className="icon3"> <FontAwesomeIcon icon={faEyeSlash} /> </p>

                </div>
                <button className="button">Sign In</button>
                <p>Don't have account ? <NavLink style={{textDecoration:'none'}} to='/Signup'> &nbsp;<small style={{color:'red'}}>Signup</small></NavLink></p>
                
            </form>
        </div>
        </>
    )
}

export default Login
