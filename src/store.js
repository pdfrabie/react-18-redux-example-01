import { configureStore } from "@reduxjs/toolkit";
import brewariesSlice from './reducers/brewaries';

export const {setbrewaries} = brewariesSlice.actions;

export const store = configureStore({
  reducer: {
    brewaries: brewariesSlice.reducer,
  },
});