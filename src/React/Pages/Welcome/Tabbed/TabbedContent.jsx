import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../../common/media_queries.js';

const TabbedContent = ({chosenTab}) => {

    console.log('TabbedContent chosenTab', chosenTab);

    return (
        <TabbedContentStyled className='TabbedContent'>
            <div className="left">
                <img src={ chosenTab.image } alt={ chosenTab.title } />
            </div>
            <div className="right">
                <h3>{ chosenTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html: chosenTab.text } } />
            </div>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    background-color: #eaddcf;
    padding: 50px;
    color: #716040;
    font-size: 18px;
    letter-spacing: .03em;

    @media ${mq.desktop} {
        display: flex;
    }

    .left {
        flex: 1;
        img {max-width: 100%; }
    }
    .right {
        flex: 4;
        margin-left:25px;
    }

    @media ${mq.desktop} {
        .right {
            padding: 0px 20px;
        }
    }
`;