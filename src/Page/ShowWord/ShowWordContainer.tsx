import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { getWordsData } from "../../api/wordApi";
import { useAppDispatch, useAppSelector } from "../../reduxtk/hooks";
import { ADD, IWords, Word } from "../../reduxtk/wordSlice";
import ShowWordPresenter from "./ShowWordPresenter";



function ShowWordContainer() {

    const dispatch = useAppDispatch()    
    const addWords = useCallback((word: IWords) => dispatch(ADD(word)), [dispatch]);    

    const { isLoading, error, data } = useQuery("/wordList.json", getWordsData, {
        onSuccess: (data) => data,
        staleTime: 20000
    });
    //const getWord = useCallback(()=>dispatch(fetchUserById("/wordList.json")),[dispatch])
    const { word } = useAppSelector((state : Word) => state)
   
    /*useEffect(() => {       
        if (word.length <= 0) {
            getWord()
        }
    },[word,getWord])*/


    useEffect(() => {        
        if (word.length < 1) {
            data?.data.map((word: IWords) => {
                return addWords(word)
            })
        }
    },[data,word,addWords])
    if (isLoading) {
        return <div>
                    로딩중...
                    </div>
    }
    if(error)return <div>An error has occurred:  + error;</div>
    return (
        <ShowWordPresenter />
        
    )
}


export default ShowWordContainer