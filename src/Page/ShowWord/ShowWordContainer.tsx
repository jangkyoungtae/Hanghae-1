import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import wordApi from "../../api/wordApi";
import { RootState } from "../../redux";
import { addWord } from "../../redux/word/actions";
import { IWords } from "../../redux/word/types";
import ShowWordPresenter from "./ShowWordPresenter";



function ShowWordContainer() {
    const dispatch = useDispatch();

    const [words, setWords] = useState<Array<IWords>>([]);

    const updateWord = useCallback(
        (word: IWords) => dispatch(addWord({ word: word })),
        [dispatch]
    );

    const wordLists = useSelector((state: RootState) => state.word.word)

    const getWordList = async () => {
        const wordlist = await wordApi.get('/wordList.json');
        setWords(wordlist.data);
    }    

    
    useEffect(() => {
        if (wordLists.length <= 0) {
            getWordList().then(() => {
                words.map((datas:IWords) => {
                    return updateWord(datas);
                })
            })
        }

    },[updateWord,wordLists,words])
    
    return (
        <ShowWordPresenter />
    )
}


export default ShowWordContainer