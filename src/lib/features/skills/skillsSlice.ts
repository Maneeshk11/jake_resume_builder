import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addSkillSet: (state, action: PayloadAction<string>) => {
      state.skills[action.payload] = [];
    },
    addSkill: (state, action: PayloadAction<[string, string]>) => {
      const [skillSet, skill] = action.payload;
      state.skills[skillSet].push(skill);
    },
    removeSkill: (state, action: PayloadAction<[string, string]>) => {
      const [skillSet, skill] = action.payload;
      state.skills[skillSet] = state.skills[skillSet].filter(
        (s) => s !== skill
      );
    },
    removeSkillSet: (state, action: PayloadAction<string>) => {
      delete state.skills[action.payload];
    },
  },
});

export const { addSkillSet, addSkill, removeSkill, removeSkillSet } =
  skillsSlice.actions;

export const skillsReducer = skillsSlice.reducer;
