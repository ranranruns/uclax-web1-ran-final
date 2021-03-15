import React, {useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

/* Components ---------------------------*/
import Nav from './Nav.jsx';
import Header from '../Header.jsx';

const NavMobile = () => {

    const [showMobileMenu, showMobileMenuUpdate] = useState(false);

    const handleHamburgerToggle = () => {
        showMobileMenuUpdate(!showMobileMenu);
    }

    return (
        <NavMobileStyled className='NavMobile'>
            <Header />

            <div 
                className="hamburger"
                onClick={ handleHamburgerToggle }
            >

                <FontAwesomeIcon icon={ faBars } />
            </div>
            {
                showMobileMenu &&
                <div className="nav-wrapper">
                <Nav handleHamburgerToggle={handleHamburgerToggle} />
                </div>
            }
        </NavMobileStyled>
    );
}

export default NavMobile;

const NavMobileStyled = styled.div`
     .hamburger {
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: 1001;

        width: 50px;
        height: 50px;

        background-color: #8c7851;

        text-align: center;
        padding-top: 10px;

        cursor: pointer;

        svg {
            font-size: 30px;
            color: #fffffe;
        }

     }

     .nav-wrapper {
        background-color: #fffffe;
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        z-index: 1000;
    }

    .Nav {
        margin-top: 70px;
    }

    a {
        display: block;
        background: #8c7851;
        color: #fffffe;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 5px;

        &.active {
            background-color: #eaddcf;
            color: #8c7851;
        }
        &:hover {
            background-color: #eaddcf;
        }
    }

`;