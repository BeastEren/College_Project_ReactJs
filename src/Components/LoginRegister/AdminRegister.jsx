import React from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function AdminRegister() {
    return (
        <div className="wrapper wrapperReg" >
            <div className="form-box">
                <form action="">
                    <div className='headText'>
                        <p className='headText2'>Admin Registration</p>
                        <p>Please enter your details !</p>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon' />

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />

                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />I aggree to the terms & condition</label>
                    </div>

                    <button type='submit'>Register</button>

                    <div className="register-link">
                        <p>Already have an account? <Link to="/adminLogin">Login</Link></p>
                    </div>
                </form>
            </div>
        </div >
    );
}
