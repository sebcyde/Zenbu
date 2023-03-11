import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store';

// Define a type for the slice state
interface LetterState {
	Letter: string | null;
}

// Define the initial state using that type
const initialState: LetterState = {
	Letter: null,
};

export const LetterFilterSlice = createSlice({
	name: 'LetterFilter',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		SetLetterFilter: (state, action: PayloadAction<string>) => {
			state.Letter = action.payload;
		},
	},
});

export const { SetLetterFilter } = LetterFilterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const LetterFilter = (state: RootState) => state.AnimeLetterFilter;

export default LetterFilterSlice.reducer;
