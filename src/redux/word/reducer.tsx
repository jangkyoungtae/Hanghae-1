import { createReducer } from "typesafe-actions";
import { ADD } from "./actions";
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
    }
});


export default word