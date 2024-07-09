import { createSlice } from '@reduxjs/toolkit';
export interface SkillsState {
  skills: Record<string, string[]>;
}

const initialState = {
  skills: {},
} as SkillsState;

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        
    }
})
