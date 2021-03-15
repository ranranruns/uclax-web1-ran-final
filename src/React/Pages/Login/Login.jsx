import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import LoginForm from './LoginForm.jsx';
// import SunAndMoon from './SunAndMoon.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <h1>Member Login</h1>
            <LoginForm />
            {/* <SunAndMoon /> */}
        </LoginStyled>
    )
}

export default Login;
const LoginStyled = styled.div`
    h1 {
        color: #8c7851;
        text-align: center;
        padding: 50px 0px 0px 0px;
    }
`;