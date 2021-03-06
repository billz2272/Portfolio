import styled from 'styled-components'


export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`;
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const Textarea = styled.textarea`

`;
export const Container = styled.div`
    
    .text{
        outline: none;
        border: 1px solid #cccccc;
        background-color: #f2f2f2;
        font-size: 1.1.rem;
        padding: 10px 0 10px 10px;
        width: 95%;
        margin: 10px 0;
        border-radius: 7px;
    }
    .text:focus {
        background-color: #ccc
    }
`;
