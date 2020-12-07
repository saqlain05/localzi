import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Register.css'

const Register = () => {
    return (
        <div>
            <div className="mainDiv">
                <form className="rform">
                    <label>Full Name</label>
                    <input className="ri" type="text" placeholder="enter Your Name" />
                    <label>Email</label>
                    <input className="ri" type="email" placeholder="enter Your Email" />
                    <label>Mobile Number</label>
                   <div className="mob">
                   <p>+91</p>
                   <input className="ri" type="text" placeholder="enter Your Mobile Number" />
                   </div>
                    <label>Password</label>
                    <input className="ri" type="Password" placeholder="enter Your Password" />
                    <label>Confirm Password</label>
                    <input className="ri" type="Password" placeholder="enter Your Confirm Password" />
                    <p className="guid"><NavLink style={{textDecoration:'none'}} to='/'> &nbsp;<small style={{color:'red'}}>Register As Guide ?</small></NavLink></p>
                    
                    <p className="tc"> <input type="checkbox"/> Terms & Conditions</p>

                    <button className="rbutton">
                        signup
                    </button>
                    <p className="guid"> Help With SignIn</p>
                </form>
            </div>
        </div>
    )
}

export default Register
