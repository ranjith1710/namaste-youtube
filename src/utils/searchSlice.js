import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, { payload }) => {
      Object.assign(state, payload);
    }
  }
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
