import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WordBox from "../../Component/WordBox";
import { IWords } from "../../redux/word/types";
import { MdLibraryAdd } from "react-icons/md";
import {  useState } from "react";
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";
import { useAppSelector } from "../../reduxtk/hooks";


const Title = styled.h1`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #5e76e2;
    color:white;
    border-radius: 20px;
    width: 50%;
    margin: 20px auto;
    margin-bottom: 60px;
    box-shadow: 3px 2px 2px white;
`
const MainContainer = styled.div`
    width:40%;
    padding: 20px;
    margin: 50px auto;
    box-sizing: border-box;
    box-shadow: 20px 10px 10px gray;
    border-radius: 30px;
    background-color: #0e004e;
    font-family: "Jalnan";
`
const DictionaryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const AddWordBtn = styled.div`    
    position:sticky;
    float: right;
    right: 80px;
    bottom: 80px;
    border: 0px;
    width: 80px;
    height: 80px;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 2px black;
    background-color: rgba(255,255,255,255);
    cursor: pointer;
`

const WordContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content:center ;
    flex-wrap: wrap;
`;


const nonData: IWords = {
    id:999999999999,
    word: "단어없음",
    description: "단어없음",
    example:"단어없음"
} 


export default function ShowWordPresenter() {
    const wordLists = useAppSelector((state) => state)
    const [itemCount, setItemCount] = useState(1);
    const navigate = useNavigate();

    const { word } = wordLists;
    
    const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
        if (isIntersecting){
            setItemCount((v) => {
                if(word.length-1 > v+1){
                    return v + 1            
                }else{
                    return word.length-1
                }
            })
        }
            
    };
    
    const { setTarget } = useIntersectionObserver({ onIntersect });
    const movePageAddWrod = () => {
        navigate("/AddWord")
    }

    return ( 
        <MainContainer>
            <Title>MY DICTIONARY</Title>             
            {wordLists ? 
                <DictionaryContainer > 
                    {word.slice(0).reverse().map((text:any, index:any) => {
                        if (index !== itemCount) {
                            return word.length >= itemCount && index <= itemCount &&
                                <WordContainer key={`${text.word + index}`} >
                                    <WordBox data={text} setItemCount={setItemCount} />
                                </WordContainer>
                        } else {                            
                            return word.length >= itemCount && index <= itemCount &&
                                <WordContainer key={`${text.word + index}`} ref={setTarget} >
                                    <WordBox data={text} setItemCount={setItemCount} />
                                </WordContainer>
                        }
                    })}
                </DictionaryContainer>
                :
                <WordContainer>
                    <WordBox data={nonData} setItemCount={setItemCount} />
                </WordContainer>
            }
            <AddWordBtn>
                <MdLibraryAdd size="60" color={"#0e004e"} onClick={movePageAddWrod} />
            </AddWordBtn>
        </MainContainer> 
    )
}
