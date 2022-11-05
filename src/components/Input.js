import React from 'react';
import styled from 'styled-components';

const Input = ({ children, ...props }) => {
    return (
        <SInput {...props}>
            {children}
        </SInput>
    );
};

const SInput = styled.input`
width: ${(props) => {
    return props.halfWidth ? '155px' : '100%'
}};
    height: 40px;
    background-color: transparent;
    border: 1px solid #313131;
    outline: none;
    border-radius: 2px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    margin-bottom: 17px;
    color: #f5f5f5;
`
export default Input;