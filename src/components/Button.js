import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }) => {
    return (
        <SButton {...props}>
            {children}
        </SButton>
    );
};

const SButton = styled.button`
font-family: 'Roboto', sans-serif;
width: 100%;
    height: 30px;
    background-color: #85c8fe;
    font-size: 11px;
    font-weight: 700;
    margin: 15px 0;
    border-radius: 3px;
    border: none;
    cursor: pointer;
`

export default Button;