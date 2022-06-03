import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWrod from "../../Component/InputWord";
import { addWord } from "../../redux/word/actions";
import { IWords } from "../../redux/word/types";

const MainContainer = styled.div`
    width: 100wh;
`
const Title = styled.h2`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    padding: 20px;
`

const AddWordContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const AddWordBtn = styled.button`
    width: 100wh;
    padding: 20px;
    font-size: 25px;
    background-color: blueviolet;
    color: white;
    margin: 10px;
    font-weight: bold;
    border-radius: 30px;
`
const InputBox = styled.div`
    width: 80%;
`
const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default function AddWordPresenter() {
    const [inputWord, setInputWord] = useState("");
    const [inputDescription, setDescription] = useState("");
    const [inputExample, setInputExample] = useState("");

    const dispatch = useDispatch();
    const updateWord = useCallback(
        (word: IWords) => dispatch(addWord({ word: word })),
        [dispatch]
    );    
    const navigate = useNavigate();
    const movePageShowWord = () => {
        const inputData :IWords = {
            word: inputWord,
            description: inputDescription,
            example:inputExample
        }
        updateWord(inputData);
        navigate("/")
    }
    return (
        <MainContainer>
            <Title>단어 추가하기</Title>
            <AddWordContainer>
                <InputBox>
                    <InputWrod caption={"단어"} input={inputWord} setInput={setInputWord}/>
                    <InputWrod caption={ "설명" }  input={inputDescription} setInput={setDescription}/>
                    <InputWrod caption={ "예제" }  input={inputExample} setInput={setInputExample}/>
                </InputBox>
                <BtnContainer>
                    <AddWordBtn style={{
                        backgroundColor:"red"
                    }}>취소하기</AddWordBtn>
                    <AddWordBtn onClick={movePageShowWord}>추가하기</AddWordBtn>
                </BtnContainer>
            </AddWordContainer>
                    
        </MainContainer>
    )
}