import React from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Login() {

    return (
        <div className='wrapper'>
            <div className="form-box">
                <form action="">
                    <h1>Login</h1>
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

                    <Link to="/homeM"><button type='submit'>Login</button></Link>

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register" >Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
