import React from 'react'
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function AdminLogin() {
    return (
        <div className='wrapper'>
            <div className="form-box">
                <form action="">
                    <div className='headText'>
                        <p className='headText1'>Admin Login</p>
                        <p>Please enter your Login details !</p>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />

                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <Link to="#">Forgot password?</Link>
                    </div>

                    <Link to="/adminPanel"><button type='submit'>Login</button></Link>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/adminRegister" >Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
