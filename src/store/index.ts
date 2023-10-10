import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import logger from 'redux-logger';
import exampleReducer1 from './slicers/exampleSlice1.ts';
import exampleReducer2 from './slicers/exampleSlice2.ts';

export const rootReducer = combineReducers({
  example1: exampleReducer1,
  example2: exampleReducer2,
});

export const store = configureStore({
  reducer: rootReducer,
  /* middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      //serializableCheck: false,
    })
      .concat(process.env.NODE_ENV === 'development' ? logger : [] as any), */
  devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export type RootState = ReturnType<(typeof store.getState)>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
