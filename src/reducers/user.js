import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: ''
  }
};

// reducers
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setlogin: (state, action) => {
      state.value = action.payload;
    },

    setlogout: (state) => {
      state.value = initialState.value;
    },
  },
});

export default userSlice