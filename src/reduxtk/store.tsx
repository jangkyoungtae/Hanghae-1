import { configureStore  } from '@reduxjs/toolkit'
import wordSlice from './wordSlice'
import wordApi from '../api/wordApi'
// ...

export const store = configureStore({
    reducer: wordSlice,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        thunk: {
            extraArgument: wordApi,
        },
        serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch