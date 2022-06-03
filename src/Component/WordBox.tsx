import styled from "styled-components"
import { IWords } from "../redux/word/types"
const BoxContainer = styled.div`
    width: 90%;
    margin: 0px 20px 20px 20px;
    padding: 10px;
    background-color: white;
`
const CaptionText = styled.span`
    font-size: 13px;
    text-decoration: underline;
    margin: 0px;
`
const WordInfoText = styled.p`
    margin: 0px 0px 10px 0px ;
    width: 50%;
    font-size: 20px;
    white-space:pre-line;

`
const ExampleText = styled.p`
    margin: 0px 0px 10px 0px ;
    font-size: 20px;
    color: #66B2FF;
`


export default function WordBox({ data }: { data: IWords }) {
    return (
        <BoxContainer>
            <CaptionText>단어</CaptionText>
            <WordInfoText >{data.word}</WordInfoText>
            <CaptionText>설명</CaptionText>
            <WordInfoText >{data.description}</WordInfoText>
            <CaptionText>예시</CaptionText>
            <ExampleText >{data.example}</ExampleText>
        </BoxContainer>
    )
}