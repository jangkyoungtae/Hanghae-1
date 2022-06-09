import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import wordApi from '../api/wordApi'


export interface IWords{
    id: number,
    word: string,
    description: string,
    example: string,
}

// Define a type for the slice state
export type Word =  {
    word: Array<IWords>,
    
}

// Define the initial state using that type
const initialState: Word = {
    word: []
}

export const fetchUserById = createAsyncThunk(
    'word/GET',
    async (path: string) => {
        return wordApi
            .get(path)
            .then((res) => res.data)
            .catch((error) => error)
    }
)


export const wordSlice = createSlice({
    name: 'word',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        ADD: (state, action: PayloadAction<IWords>) => {
            state.word.push(action.payload)
        },
        UPDATE: (state, action: PayloadAction<IWords>) => {
            if (action.payload.id !== undefined && action.payload.id !== null) {
                
                state.word.map((v) => {
                    if (action.payload.id === v.id) {
                        return state.word[v.id] = { ...action.payload }
                    } else {
                        return v
                    }
                })
            }
        },
        DEL: (state, action: PayloadAction<number>) => {
            state.word = state.word.filter(v => {
                return v.id !== action.payload
            })
        }
    },
    extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchUserById.fulfilled, (state, action) => {
                // Add user to the state array
                state.word = [...action.payload]
            })
  },

});


export const { ADD, DEL ,UPDATE} = wordSlice.actions


export default wordSlice.reducer