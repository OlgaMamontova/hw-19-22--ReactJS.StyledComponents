import React from 'react';
import styled from 'styled-components';
import Input from './Input';

export const InputFirstName = styled(Input)`
    ${(props) => {
        if (props.value){
            if (props.value.length < 3){
                return `
                border-color: red;`
            }
            if (props.value.length >= 3){
                return `
                border-color: green;`
            }                   
        }
    }
    }
`;

export const InputLastName = styled(Input)`
${(props) => {
    if (props.value){
        if (props.value.length < 3){
            return `
            border-color: red;`
        }
        if (props.value.length >= 3){
            return `
            border-color: green;`
        }                   
    }
}
}
`;

export const EMAIL_REGEXP = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{2,}\.){1,2}[-A-Za-z]{2,})$/u;
export const InputMail = styled(Input)`
${(props) => {
    if (props.value){
        if (!EMAIL_REGEXP.test(props.value)){
            return `
            border-color: red;`
        }
        return `
            border-color: green;`                      
    }
}
}
`;

export const PASSWORD_REGEXP = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}/u
export const InputPassword = styled(Input)`
${(props) => {
    if (props.value){
        if (!PASSWORD_REGEXP.test(props.value)){
            return `
            border-color: red;`
        }
        return `
            border-color: green;`                        
    }
}
}
`;