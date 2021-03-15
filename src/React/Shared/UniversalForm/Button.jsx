import React from 'react';
import styled from 'styled-components';

const Button = ({ children, type }) => {

    return (
        <ButtonStyled
            className='Button'
            type={type}
        >
            { children}
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: #8c7851;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    color: #fffffe;
    cursor: pointer;

    border: solid 3px #8c7851;
    border-radius: 5px;
`;