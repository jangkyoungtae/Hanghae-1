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
    const wordLists = useSelector((state: RootState) => state.word.word)
    const updateWord = useCallback(
        (word: IWords) => dispatch(addWord({ word: word })),
        [dispatch]
    );
    const addDefaultWord = async (data: Array<IWords>) => {
        console.log(data)
        console.log(wordLists)
        data.map((datas:IWords) => {
            updateWord(datas);
        })
    }
    const getWordList = async () => {
        const wordlist = await wordApi.get('/wordList.json');
        await addDefaultWord(wordlist.data);
        
    }    
    
    useEffect(() => {
        if (wordLists.length <=0) {
            getWordList();
        }
    },[])
    
    return (
        <ShowWordPresenter />
    )
}


export default ShowWordContainer