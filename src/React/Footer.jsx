import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            © 2021 Still Life Ceramics.
        </FooterStyled>
    );
}

export default Footer;
const FooterStyled = styled.div`
  padding:10px 0;
  background-color:#8c7851;
  color:#fffffe;
  text-align: center;
`;