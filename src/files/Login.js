import React from 'react';
export default function Login() {
    return (
        <div>
            <div className='login-container'>
            <span className="logo">
                <img src="/logo.jpg"/>
            </span>
            <div className='form-container'>
                <div className='form'>
                    <input placeholder='Email'  className='email'/>
                    <input placeholder='Password' className='password'/>
                    <div className='row password-link'>
                        <div className="remember">
                            <span className="img"></span>
                            <span className="text">
                                Remember me
                            </span>
                        </div>
                        <div className="forgt">
                            <span className="text">
                                Forgot password?
                            </span>
                        </div>
                    </div>
                    <button className='submit-button' type='submit'>Login</button>
                    <div className="account">
                        Don’t have an account? Sign up
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
