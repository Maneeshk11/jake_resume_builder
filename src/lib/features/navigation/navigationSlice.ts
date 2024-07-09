import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface NavigationState {
    activeTab: string;
}

const initialState: NavigationState = {
    activeTab: "personal",
};

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
        },
    },
});

export const { setActiveTab } = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;