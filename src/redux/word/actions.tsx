import { createAction } from "typesafe-actions";
import { IWords } from "./types";

export const ADD = "word/ADD";
export const DEL = "word/DEL";



export const addWord = createAction(ADD)<{
    word: IWords,
}>();

export const deleteWord = createAction(DEL)();