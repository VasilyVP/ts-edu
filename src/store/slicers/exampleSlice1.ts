import { createSlice } from "@reduxjs/toolkit";

export enum UITheme {
    default = 'system',
    light = 'light',
    dark = 'dark',
};

export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

type ExampleState = {
    theme: UITheme;
    season: Season | null;
}

const initialState: ExampleState = {
    theme: UITheme.default,
    season: null,
}

const exampleSlice = createSlice({
    name: "commonState",
    initialState,
    reducers: {
        setTheme(state: ExampleState, action: { type: string; payload: UITheme; }) {
            state.theme = action.payload;
        },
        setDefaultTheme(state: ExampleState/* , action: { type: string; payload: null; } */) {
            state.theme = UITheme.default;
        },
        setSeason(state: ExampleState, action: { type: string; payload: Season; }) {
            state.season = action.payload;
        },
        resetSeason(state: ExampleState) {
            state.season = null;
        },
    },
});

export const { setTheme, setDefaultTheme, setSeason, resetSeason } = exampleSlice.actions;
export default exampleSlice.reducer;
