import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from './Button';
import { InputFirstName, InputLastName, InputPassword, InputMail, EMAIL_REGEXP, PASSWORD_REGEXP } from './Validation';

const signUp = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [valueFirstName, setValueFirstName] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    return (
        <div>
            <h2>Sign up</h2>
            <form>
                <p> 
                    <InputFirstName 
                    type='text'
                    placeholder='First Name*'
                    value={valueFirstName}
                    onChange={(e) => {
                        setValueFirstName(e.target.value)
                        
                    }}
                    halfWidth
                    />
                    <InputLastName 
                    type='text'
                    placeholder='Last Name*'
                    value={valueLastName}
                    onChange={(e) => {
                        setValueLastName(e.target.value)
                    }}
                    halfWidth
                    />
                </p>       
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
                        setValuePassword(e.target.value);

                    }}
                    />
                </p>
                <p className='wrapper-checkbox'>
                    <input 
                    type='checkbox'
                    id='receive' 
                    name='receive' />
                    <label htmlFor='receive'>I want to receive inspiration, marketing promotions and updates via email.</label>
                </p>
                
                <Button
                disabled={!(EMAIL_REGEXP.test(valueEmail) && PASSWORD_REGEXP.test(valuePassword) && valueLastName.length > 2 && valueFirstName.length > 2)}>
                    SIGN UP</Button>
                <p className='wrapper-links'>
                    <Link className='link' to={'/signin'}>Already have an account? Sign in</Link>
                    </p>
            </form>
        </div>
    );
};

export default signUp;