import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { isValidEmail } from '../../../common/utilities.js';

/* Components ---------------------------*/
import Button from './Button.jsx';
import FieldGroup from './FieldGroup/FieldGroup.jsx';

const UniversalForm = ({fields}) => {

    const [theFields, theFieldsUpdate] = useState(fields);

    const handleFieldUpdate = (theUpdatedField) => {
        console.log('Handling Field Updates', theUpdatedField.value);

        /* Validation ---------------------------*/
        const validation = theUpdatedField.validation;

        let errors = [];

        validation.forEach((val) => {
            switch (val) {
                case 'req':
                    if (theUpdatedField.value.length < 1) {
                        errors.push(`The ${theUpdatedField.label} is required.`);
                    }
                    break;
                case 'email':
                    if (!isValidEmail(theUpdatedField.value)) {
                        errors.push(`The ${theUpdatedField.label} is not a valid email.`);
                    }
                    break;
                default:
                    return true;
            }
        });

        let validatedField = {
            ...theUpdatedField,
            errors: errors,
        }

        /* Update Fields ---------------------------*/
        const newFields = theFields.map((field) => {
            return (field.id === validatedField.id) ? validatedField : field;
        });

        /* Update State ---------------------------*/
        theFieldsUpdate(newFields);
    }

    return (
        <UniversalFormStyled className='UniversalForm'>
            <FieldGroup id='email'      theFields={ theFields }     handleFieldUpdate={ handleFieldUpdate } />
            <FieldGroup id='message'    theFields={ theFields }     handleFieldUpdate={ handleFieldUpdate } />
            <Button>Send Email</Button> 
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.form`
    max-width: 500px;
    padding: 10px;
    margin: 50px auto;
`;