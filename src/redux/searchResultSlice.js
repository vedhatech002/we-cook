import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    result: null,
    showSuggestion: false,
    showResult: false,
  },
  reducers: {
    addSearchResult: (state, action) => {
      state.result = action.payload;
    },
    clearSearchResult: (state) => {
      state = null;
    },
    triggerSuggestion: (state, action) => {
      state.showSuggestion = action.payload;
    },
    triggerResult: (state, action) => {
      state.showResult = action.payload;
    },
  },
});

export const {
  addSearchResult,
  clearSearchResult,
  triggerSuggestion,
  triggerResult,
} = searchResultSlice.actions;

export default searchResultSlice.reducer;
