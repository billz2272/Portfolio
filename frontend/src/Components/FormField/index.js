import React from 'react';
import { Container, Input, Label, Textarea } from './styles';

const FormField = ({ label, type, config, value, changed }) => { 
    let inputElement = null;
    
    switch (type) {        case "input":
            inputElement = (
                <Input
                    className='text'
                    {...config}
                    value={value}
                    onChange={changed}
                />
            )
         break;
        case "textarea":
            inputElement = (
                <Textarea
                    className='text'
                    {...config}
                    value={value}
                    onChange={changed}
                />
            )
         break;  
        default: 
            inputElement = (
                <Input 
                    className='text'
                    {...config}
                    value={value}
                    onChange={changed}
                />
            )
    }
    
return (
    <Container>
        <Label className='label'>{label}</Label>
        {inputElement}
    </Container>
    )
}

export default FormField;