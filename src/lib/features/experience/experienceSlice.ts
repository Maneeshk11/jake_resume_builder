import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExperienceState {
  company_name: string;
  location: string;
  position_title: string;
  experience_type: string;
  start_date: string;
  end_date?: string;
  currently_working: boolean;
  description: string;
}

const initialState = {
  count: 1,
  experiences: [
    {
      company_name: "",
      location: "",
      position_title: "",
      experience_type: "",
      start_date: "",
      end_date: "",
      currently_working: false,
      description: "",
    },
  ] as ExperienceState[],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state) => {
      state.count++;
      state.experiences.push({
        company_name: "",
        location: "",
        position_title: "",
        experience_type: "",
        start_date: "",
        end_date: "",
        currently_working: false,
        description: "",
      } as ExperienceState);
    },
    removeExperience: (state, action: PayloadAction<number>) => {
      state.count--;
      const index = action.payload;
      state.experiences.splice(index, 1);
    },
    setCompanyName: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].company_name = value;
    },
    setLocation: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].location = value;
    },
    setPositionTitle: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].position_title = value;
    },
    setExperienceType: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].experience_type = value;
    },
    setStartDate: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].start_date = value;
    },
    setEndDate: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].end_date = value;
    },
    setCurrentlyWorking: (state, action: PayloadAction<[boolean, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].currently_working = value;
    },
    setDescription: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.experiences[index].description = value;
    },
  },
});

export const {
  addExperience,
  removeExperience,
  setCompanyName,
  setLocation,
  setPositionTitle,
  setExperienceType,
  setStartDate,
  setEndDate,
  setCurrentlyWorking,
  setDescription,
} = experienceSlice.actions;

export const experienceReducer = experienceSlice.reducer;
