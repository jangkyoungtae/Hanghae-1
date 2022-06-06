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
            console.log(action.payload.word.id)
            if(action.payload.word.id !== undefined && action.payload.word.id !== null)
                draft.word[action.payload.word.id] = { ...action.payload.word }
            
        })
    }
});
//

export default word