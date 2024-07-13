import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GenerateState {
  isConfirm: boolean;
  isLoaded: boolean;
  blobUrl: string;
}

const initialState: GenerateState = {
  isConfirm: false,
  isLoaded: false,
  blobUrl: "",
};

export const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    setConfirm: (state, action: PayloadAction<boolean>) => {
      state.isConfirm = action.payload;
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setBlobUrl: (state, action: PayloadAction<string>) => {
      state.blobUrl = action.payload;
    },
  },
});

export const { setConfirm, setLoaded, setBlobUrl } = generateSlice.actions;
export const generateReducer = generateSlice.reducer;
