import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from './Button';
import { InputPassword, InputMail, EMAIL_REGEXP, PASSWORD_REGEXP } from './Validation';

const signIn = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    return (
        <div>
            <h2>Sign in</h2>
            <form>
                <p>
                    <InputMail 
                    type='email'
                    placeholder='Email Address*'                    
                    value={valueEmail}
                    onChange={(e) => {
                        setValueEmail(e.target.value)
                    }}
                    />
                </p>
                <p>
                    <InputPassword 
                    type='password'
                    placeholder='Password*'
                    value={valuePassword}
                    onChange={(e) => {
                        setValuePassword(e.target.value)
                    }}
                    />
                </p>
                <p className='wrapper-checkbox'>
                    <input 
                    type='checkbox'
                    id='remember' 
                    name='remember'/>
                    <label htmlFor="remember">Remember me</label>
                </p>
                <Button 
                 disabled={!(EMAIL_REGEXP.test(valueEmail) && PASSWORD_REGEXP.test(valuePassword))}
                >SIGN IN</Button>
                <p className='wrapper-links'>                    
                    <Link to={'/signup'} className='link'>Don't have an account? Sign Up</Link>
                    <a className='link' href='#'>Forgot password?</a>
                </p>
            </form>
        </div>
    );
};

export default signIn;