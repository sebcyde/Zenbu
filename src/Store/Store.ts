import { configureStore } from '@reduxjs/toolkit';
import AnimeLetterFilterSlice from './Slices/AnimeLetterFilterSlice';
import GenreFilterSlice from './Slices/AnimeGenreFilterSlice';

export const store = configureStore({
	reducer: {
		AnimeLetterFilter: AnimeLetterFilterSlice,
		AnimeGenreFilter: GenreFilterSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
