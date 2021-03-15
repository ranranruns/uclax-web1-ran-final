import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* c3 + tab ---------------------------*/

/* Scripts ---------------------------*/
import { mq } from '../common/media_queries.js';
import useMediaQuery from '../common/useMediaQuery.js';

/* Components ---------------------------*/
import NavMobile from './Nav/NavMobile.jsx';
import NavLarge from './Nav/NavLarge.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const Container = () => {

    const { isSmall } = useMediaQuery();

    return (
        <BrowserRouter>
            <ContainerStyled className='Container'>
           
                {
                    isSmall
                    ? <NavMobile />
                    : <NavLarge />
                }
                <Main />
                <Footer />
            </ContainerStyled>
        </BrowserRouter>
    );
}

export default Container;

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    @media ${mq.tablet} {
        background-color: #f9f4ef;
    }
    @media ${mq.desktop} {
        background-color: #f9f4ef;
    }
    @media ${mq.ultrawide} {
        background-color: #f9f4ef;
    }

    `;