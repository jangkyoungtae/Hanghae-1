import { combineReducers } from "redux";
import word from "./word/reducer";
import { Word } from "./word/types";

export type RootState={
    word:Word
}

const rootReducer = combineReducers({
    word
});

export default rootReducer