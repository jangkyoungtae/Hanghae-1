import React from "react";
import styled from "styled-components"

const InputContainer = styled.div`
    width:100%;
    background-color: white;
    padding: 20px;
    
    margin-bottom: 130px;
`;

const CaptionText = styled.span`
    font-size: 20px;
    text-decoration: underline;
    margin: 0px;
`
const InfoInput = styled.input`
    font-size: 40px;
    width: 70%;
    margin: 20px;
    padding: 15px;

`

export default function InputWrod({ caption , input , setInput}: { caption: string, input:string ,setInput:React.Dispatch<React.SetStateAction<string>>}) {
    
    const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text: React.SetStateAction<string> = e.target.value;
        setInput(text)
    }
    return (
        <InputContainer>
            <CaptionText>{caption}</CaptionText>
            <br></br>
            <InfoInput type={"text"} onChange={ inputText } value={ input }/>
        </InputContainer>
    )
}