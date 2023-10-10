import { createSlice } from "@reduxjs/toolkit";

export enum NotUITheme {
    default = 'chaos',
    right = 'right',
};

type ExampleState2 = {
    notTheme: NotUITheme;
}

const initialState: ExampleState2 = {
    notTheme: NotUITheme.default,
}

const exampleSlice2 = createSlice({
    name: "exampleState2",
    initialState,
    reducers: {
        setNotUITheme(state: ExampleState2, action: { type: string; payload: NotUITheme; }) {
            state.notTheme = action.payload;
        },
    },
});

export const { setNotUITheme } = exampleSlice2.actions;
export default exampleSlice2.reducer;
