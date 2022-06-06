import { createReducer } from "typesafe-actions";
import { ADD, UPDATE } from "./actions";
import { Word, WordAction } from "./types";
import produce from 'immer';


const initailState: Word = {
    word: []
}


const word = createReducer<Word, WordAction>(initailState, {
    
    [ADD]: (state, action) => {
        return produce(state, draft => {
            draft.word.push(action.payload.word)
        })
    },
    [UPDATE]: (state, action) => {
        return produce(state, draft => {
            draft.word.map((u) => {
                console.log(u,action.payload.word)
            })
        })
    }
});
//u.word === action.payload.word.word ? {...u, ...action.payload.word} : u

export default word