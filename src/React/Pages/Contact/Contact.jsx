import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
// import Profile from './Profile.jsx';
import ContactForm from './ContactForm.jsx';
// import GoogleMap from './GoogleMap.jsx';

const Contact = () => {
    return (
        <ContactStyled className='Contact'>
            <h1>Contact Us</h1>
            {/* <Profile /> */}
            <ContactForm />
            {/* <GoogleMap /> */}
        </ContactStyled>
    );
}

export default Contact;
const ContactStyled = styled.div`
    h1 {
        color: #8c7851;
        text-align: center;
        padding: 50px 0px 0px 0px;
    }
`;