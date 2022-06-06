import { useCallback,  useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWrod from "../../Component/InputWord";
import { RootState } from "../../redux";
import { addWord, updateWord } from "../../redux/word/actions";
import { IWords } from "../../redux/word/types";

const MainContainer = styled.div`
    width:40%;
    padding: 20px;
    margin: 50px auto;
    box-sizing: border-box;
    box-shadow: 20px 10px 10px black;
    border-radius: 30px;
    background-color: #0e004e;
    font-family: "Jalnan";    
`
const Title = styled.h2`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    padding: 20px;
    color:white;
`

const AddWordContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const AddWordBtn = styled.button< { color : string } >`
    width: 100wh;
    padding: 20px;
    font-size: 25px;
    background-color: ${(props) => (props.color)};
    color: white;
    margin: 10px;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    &:hover{
        background-color:rgba(30,30,30,30)
    }
`
const InputBox = styled.div`
    width: 80%;
`
const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default function AddWordPresenter({ data}: {data?:IWords}) {
    const [inputWord, setInputWord] = useState(data ? data.word : "");
    const [inputDescription, setDescription] = useState(data ? data.description : "");
    const [inputExample, setInputExample] = useState(data ? data.example : "");
    const dispatch = useDispatch();
    const addWords = useCallback(
        (word: IWords) => dispatch(addWord({ word: word })),
        [dispatch]
    );    
    const updateWords = useCallback(
        (word: IWords) => dispatch(updateWord({ word: word })),
        [dispatch]
    );    
    const wordLists = useSelector((state: RootState) => state.word.word)
    const navigate = useNavigate();
    const movePageShowWord = () => {
        if (inputWord !== "" && inputDescription !== "") {
            
            if (data !== undefined  && data !== null ) {
                const inputData: IWords = {
                id: data.id ,
                word: inputWord,
                description: inputDescription,
                example: inputExample
            }
                updateWords(inputData)

            } else {
                const inputData: IWords = {
                    id: wordLists.length,
                    word: inputWord,
                    description: inputDescription,
                    example: inputExample
                }
                addWords(inputData);
            }
            navigate("/")
        } else {
            alert("단어와 설명이 비어있습니다 . 확인해주세요");
        }
    }
    const movePageCancle = () => {
        navigate("/")
    }
    return (
        <MainContainer>
            <Title>단어 추가하기</Title>
            <AddWordContainer>
                <InputBox>
                    <InputWrod caption={"단어"} setInput={setInputWord} data={data?.word}/>
                    <InputWrod caption={"설명"} setInput={setDescription} data={data?.description}/>
                    <InputWrod caption={"예제"} setInput={setInputExample} data={data?.example}/>
                </InputBox>
                <BtnContainer>
                    <AddWordBtn color="red"
                        onClick={movePageCancle}
                    >취소하기</AddWordBtn>
                    <AddWordBtn color="rgba(69, 0, 231, 0.902)" onClick={movePageShowWord}>{!data ? "추가하기" : "수정하기"}</AddWordBtn>
                </BtnContainer>
            </AddWordContainer>
                    
        </MainContainer>
    )
}