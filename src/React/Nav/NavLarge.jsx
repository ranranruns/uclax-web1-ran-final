import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

    display: flex;
    justify-content: center;
    background-color: #8c7851;
    padding: 20px;
    
    .Nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .Nav-span {
        display: flex;
    }

    .Nav-span > a {
        flex: 1;
        text-align: center;
        font-weight: bold;
        border-radius: 5px;


        display:block;
        /* background: #8c7851; */
        color: #fffffe;
        text-decoration: none;


        padding: 10px;
        margin: 0px 5px;

        &:hover {
            color: #eaddcf;
        }

        &.active {
           text-decoration: underline;
           text-underline-offset: 9px;
           text-decoration-thickness: 2px;
        }
    }
`;