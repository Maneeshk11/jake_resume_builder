import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LinksState {
  linkedin: string;
  github: string;
  portfolio: string;
}

const initialState: LinksState = {
  linkedin: "",
  github: "",
  portfolio: "",
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setLinkedin: (state, action: PayloadAction<string>) => {
      state.linkedin = action.payload;
    },
    setGithub: (state, action: PayloadAction<string>) => {
      state.github = action.payload;
    },
    setPortfolio: (state, action: PayloadAction<string>) => {
      state.portfolio = action.payload;
    },
  },
});

export const { setLinkedin, setGithub, setPortfolio } = linksSlice.actions;
export const linksReducer = linksSlice.reducer;
