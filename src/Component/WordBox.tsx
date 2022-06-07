import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IWords } from "../redux/word/types"
import { FiPenTool } from "react-icons/fi"
import {AiOutlineCloseCircle} from "react-icons/ai"
import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { DEL } from "../reduxtk/wordSlice"

const BoxContainer = styled.div`
    width: 80%;
    margin: 0px 20px 20px 20px;
    padding: 5px;
    background-color: rgba(200, 200,200, 0.7);
    box-shadow: 5px 2px 2px black;
    border-radius: 20px;
    box-sizing: border-box;
    
`
const CaptionText = styled.span`
    font-size: 15px;
    text-decoration: underline;
    margin: 0px;
    font-family: "Jalnan";
`
const WordInfoText = styled.span`
    margin: 20px;
    font-size: 20px;
    white-space:inherit;
    line-height: 1.3em;

`
const ExampleText = styled.span`
    margin: 20px;
    font-size: 20px;
    color: #66B2FF;
`
const TextBox = styled.div`
    margin-bottom: 20px;
    box-sizing: border-box;

`
const ContentContainer = styled.div`    
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: 2px 1px 1px black;
`
const UpdateBtn = styled.div`
    display: flex;
    justify-content: center;
    background-color: #5e76e2;
    padding: 10px;
    border-radius: 30px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
        background-color: #0e004e;

    }
`
const DeleteBtn = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 24px;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: red;

    }
`

export default function WordBox({ data, ref ,setItemCount}: { data: IWords, ref?: React.RefObject<HTMLDivElement> ,setItemCount:React.Dispatch<React.SetStateAction<number>>}) {
    const navigate = useNavigate()
    const [color, setColor] = useState("black");
    const dispatch = useDispatch();
    const delWord = useCallback(
        (id: number) => dispatch(DEL(id)),
        [dispatch]
    );
    
    const itemDelete = () => {
        setItemCount((v) => {
            return v -1 
        })
        delWord(data.id)
    }


    const movePageAddWrod = () => {
        navigate("/AddWord", {
            state: {
                id:data.id,
                description: data.description,
                example: data.example,
                word: data.word,
            }
        })
    }

    return (
        <BoxContainer >
            <ContentContainer ref={ref}>
                
                <div style={{
                    display: "flex",
                    flexDirection:"column"
                }}>
                    <TextBox>
                        <CaptionText>단어 : </CaptionText>
                        <WordInfoText >{data.word}</WordInfoText>
                    </TextBox>
                    <TextBox>
                        <CaptionText>설명 : </CaptionText>
                        <WordInfoText >{data.description}</WordInfoText>
                    </TextBox>
                    <TextBox>
                        <CaptionText>예시 : </CaptionText>
                        <ExampleText >{data.example}</ExampleText>
                    </TextBox>
                </div>
                <div style={{
                    display: "flex",                   
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent:"space-between"

                    
                }}>
                    <DeleteBtn
                        onMouseOver={() => {
                            setColor("white")
                        }}
                        onMouseLeave={() => {
                            setColor("black")
                        }}
                        onClick={itemDelete}
                    >
                        
                        <AiOutlineCloseCircle style={{
                            margin: "0px",
                            padding: "0px",
                        }} size={36} color={color} />
                    </DeleteBtn>
                    <UpdateBtn onClick={movePageAddWrod}>                        
                        <FiPenTool size={24} color={ "white" }>수정</FiPenTool>
                    </UpdateBtn>
                </div>
            </ContentContainer>
            
        </BoxContainer>
    )
}