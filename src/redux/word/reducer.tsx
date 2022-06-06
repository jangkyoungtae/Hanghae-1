import { createReducer } from "typesafe-actions";
import { ADD, DEL, UPDATE } from "./actions";
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
            if (action.payload.word.id !== undefined && action.payload.word.id !== null)
                draft.word[action.payload.word.id] = { ...action.payload.word }
        });
    },
    [DEL]: (state, action) => {
        return produce(state, draft => {
            draft.word = draft.word.filter(v =>  v.id !== action.payload)
        });
    }
});
//

export interface IWords{
    id: number,
    word: string,
    description: string,
    example:string
}


export default word