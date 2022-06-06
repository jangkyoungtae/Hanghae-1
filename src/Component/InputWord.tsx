import React, { useEffect, useRef } from "react";
import styled from "styled-components"

const InputContainer = styled.div`
    width:100%;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 70px;
    box-sizing: border-box;
`;

const CaptionText = styled.span`
    font-size: 20px;
    text-decoration: underline;
    margin: 0px;
    box-sizing: border-box;
    
`
const InfoInput = styled.input`
    font-size: 23px;
    width: 100%;
    margin: 15px auto;
    padding: 25px;
    border-radius: 10px;
    box-sizing: border-box;

`

export default function InputWrod({ caption , setInput, data}: { caption: string, setInput:React.Dispatch<React.SetStateAction<string>>, data?:string}) {
    const wordRef = useRef<HTMLInputElement>(null)
    const inputText = () => {
        if(wordRef.current?.value)
            setInput(wordRef.current?.value)
    }
    
    useEffect(() => {
        if (wordRef.current !== undefined && data !== undefined  && wordRef.current !== null) {
            wordRef.current.value = data;         
        }
    },[data])
    return (
        <InputContainer>
            <CaptionText>{caption}</CaptionText>
            <br></br>
            {!data ? <InfoInput type={"text"} onChange={inputText} ref={wordRef} /> :
                <InfoInput type={"text"} onChange={inputText} ref={wordRef} />
            }
        </InputContainer>
    )
}