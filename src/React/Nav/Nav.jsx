import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import useMediaQuery from '../../common/useMediaQuery';

const Nav = ({ handleHamburgerToggle }) => {
    const { isSmall } = useMediaQuery();
    return (
        <NavStyled className="Nav">
            <span className="Nav-span">
                <NavLink onClick={handleHamburgerToggle} to="/" exact>Welcome</NavLink>
                <NavLink onClick={handleHamburgerToggle} to="/services">Classes</NavLink>
            </span>
            {!isSmall && (<Header />)}
            <span className="Nav-span">
                <NavLink onClick={handleHamburgerToggle} to="/contact">Contact</NavLink>
                <NavLink onClick={handleHamburgerToggle} to="/login">Login</NavLink>
            </span>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`

`;