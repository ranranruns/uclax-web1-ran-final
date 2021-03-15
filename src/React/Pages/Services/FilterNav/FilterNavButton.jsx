import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({ category, catChosen, catChosenUpdate }) => {

    const handleCatUpdate = () => {
        catChosenUpdate(category);
    }

    const theClassName = (category === catChosen)
        ? `FilterNavButton active`
        : `FilterNavButton`;

    return (
        <FilterNavButtonStyled className={ theClassName }>
            <button
                onClick={ handleCatUpdate }
            >
                { category }
            </button>
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    button {
        display: inline-block;
        width: 150px;
        background-color: #eaddcf;
        padding: 10px 0px;
        margin: 0px 10px;
        color: #8c7851;
        font-weight: bold;
        

        border: solid 1px #eaddcf;
        border-radius: 5px;
        cursor: pointer;
    }

    &:hover {
        button {
        border: solid 1px #fffffe;
        background-color: #fffffe;
        }
    }

    &.active {
        button {
            border: solid 1px #8c7851;
            background-color: #8c7851;
            color: #fffffe;
        }
    }
`;