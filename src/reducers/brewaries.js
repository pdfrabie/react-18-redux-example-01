import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    data: []
  }
};

const brewariesSlice = createSlice({
  name: 'brewaries',
  initialState: initialState,
  reducers: {
    setbrewaries: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default brewariesSlice