import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store';

interface GenreState {
	Genre: string | null;
}

const initialState: GenreState = {
	Genre: null,
};

export const GenreFilterSlice = createSlice({
	name: 'AnimeGenreFilter',
	initialState,
	reducers: {
		SetGenreFilter: (state, action: PayloadAction<string | null>) => {
			state.Genre = action.payload;
		},
	},
});

export const { SetGenreFilter } = GenreFilterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const AnimeGenreFilter = (state: RootState) => state.AnimeGenreFilter;

export default GenreFilterSlice.reducer;
