import React from 'react';
import styled from 'styled-components';

const Input = ({theField, onChange}) => {

    const theClassName = (!theField.errors || theField.errors.length < 1) 
            ? 'Input'
            : 'Input error';

    return (
        <InputStyled 
            className={ theClassName } 

            id={ theField.id }
            value={ theField.value }

            onChange={ onChange }
        />
    );
}

export default Input;

const InputStyled = styled.input`
    display: block;
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    color: #716040;

    border: solid 3px #8c7851;

    &:focus {
        border: solid 3px #716040;
    }
    &.error {
        border: solid 3px red;
    }

`;