import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../reduxtk/hooks";
import { fetchUserById, Word } from "../../reduxtk/wordSlice";
import ShowWordPresenter from "./ShowWordPresenter";



function ShowWordContainer() {
   // const dispatch = useDispatch();

    const dispatch = useAppDispatch()
    
    // const updateWord = useCallback(
    //     (word: IWords) => dispatch(addWord({ word: word })),
    //     [dispatch]
    // );
    const getWord = useCallback(()=>dispatch(fetchUserById("/wordList.json")),[dispatch])
    const { word } = useAppSelector((state : Word) => state)

    // const getWordList = async () => {
    //     const wordlist = await wordApi.get('/wordList.json');
    //     setWords(wordlist.data);
    // }    

    // useEffect(() => {
    //     if (wordLists.length <= 0) {
    //         getWordList().then(() => {
    //             words.map((datas:IWords) => {
    //                 return updateWord(datas);
    //             })
    //         })
    //     }

    // },[updateWord,wordLists,words])
    useEffect(() => {       
        if (word.length <= 0) {
            getWord()
        }
    },[word,getWord])
    
    return (
        <ShowWordPresenter />
    )
}


export default ShowWordContainer