import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const TabbedNavItem = ({tabItem, changeTabs, chosenTab}) => {

    const handleTabClick = () => {
        changeTabs(tabItem);
    }

    const theClassName = classnames({
        'TabbedNavItem': true,
        'active': tabItem.title === chosenTab.title,
    });

    return (
        <TabbedNavItemStyled 
            className= { theClassName }
            onClick={ handleTabClick }
        >
            { tabItem.title }
        </TabbedNavItemStyled>
    );
}

export default TabbedNavItem;

const TabbedNavItemStyled = styled.div`
    color: #fffffe;
    line-height: 40px;
    display: inline-block;
    width: 150px;
    text-align: center;
    font-weight: bold;
    margin-right: 5px;
    border-radius: 5px 5px 0px 0px;
    font-size: 15px;
    cursor: pointer;

    background-color: #8c7851;

    &:hover {
        background-color: #eaddcf;
    }
    &.active {
        color: #8c7851;
        background-color: #eaddcf;
    }
`;