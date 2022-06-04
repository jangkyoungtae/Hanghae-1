import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import WordBox from "../../Component/WordBox"
import { RootState } from "../../redux"
import { IWords } from "../../redux/word/types"

const Title = styled.h2`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    padding: 20px;
`
const MainContainer = styled.div`
    width:100wh;
`
const DictionaryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const AddWordBtn = styled.button`    
    position:sticky;
    float: right;
    right: 80px;
    bottom: 80px;
    border: 0px;
    background-color: rgba(255,255,255,0);
`
const AddBtnImage = styled.img`
    width: 130px;
    height: 130px;
    object-fit: contain;
`
const nonData: IWords = {
    word: "단어없음",
    description: "단어없음",
    example:"단어없음"
} 

export default function ShowWordPresenter() {
    const wordLists = useSelector((state: RootState) => state);

    const navigate = useNavigate();

    const { word } = wordLists.word;

    const movePageAddWrod = () => {
        navigate("/AddWord")
    }




    return (
        <>        
            <MainContainer>
                <Title>MY DICTIONARY</Title>
                    
                {word ? 
                    <DictionaryContainer> 
                        {word.map((text,index) => {
                            return <WordBox key={`${text.word+index}`} data={text}/>
                        })}
                    </DictionaryContainer>
                    :
                    <WordBox data={nonData}/>
                }
                <AddWordBtn onClick={movePageAddWrod}>
                    <AddBtnImage src={`${process.env.PUBLIC_URL}/add2.png`} />
                </AddWordBtn>
            </MainContainer> 
        </>       
    )
}
