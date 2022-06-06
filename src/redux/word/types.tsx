import { ActionType } from "typesafe-actions";
import * as actions from "./actions"


export type WordAction = ActionType<typeof actions>;

export interface IWords{
    id: number,
    word: string,
    description: string,
    example: string,
}


export type Word =  {
    word: Array<IWords>,
    
}