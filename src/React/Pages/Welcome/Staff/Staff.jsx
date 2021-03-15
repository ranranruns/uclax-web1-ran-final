import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Staff = () => {

    return (
        <StaffStyled className='Staff'>
            <h1>View Demo</h1>

            <YouTube videoId={"U64bLz4EWRI"} containerClassName="youtube-container" />
            <h1>{""}</h1>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    background-color: #eaddcf;
    padding: 25px;
    margin: 30px 0px 50px 0px;
    color: #716040;

    h1 {
        text-align: center;
        padding: 0px 0px 20px 0px;
    }

    .youtube-container {
        position: relative;
        width: 100%;
        padding-bottom: min(56.25%, 601px);
        overflow: hidden;
        margin: auto;
        max-width: 1096px;
    }
  
    .youtube-container iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        max-height:576px;
    }
`;