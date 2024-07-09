import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface EducationState {
  school_name: string;
  major: string;
  degree_type: string;
  start_date: string;
  end_date: string;
}

const initialState = {
  count: 1,
  educations: [
    {
      school_name: "",
      major: "",
      degree_type: "",
      start_date: "",
      end_date: "",
    },
  ] as EducationState[],
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state) => {
      state.count++;
      state.educations.push({
        school_name: "",
        major: "",
        degree_type: "",
        start_date: "",
        end_date: "",
      } as EducationState);
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.count--;
      const index = action.payload;
      state.educations.splice(index, 1);
    },
    setSchoolName: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].school_name = value;
    },
    setMajor: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].major = value;
    },
    setDegreeType: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].degree_type = value;
    },
    setStartDate: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].start_date = value;
    },
    setEndDate: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].end_date = value;
    },
  },
});

export const {
  setSchoolName,
  setMajor,
  setDegreeType,
  setStartDate,
  setEndDate,
  addEducation,
  removeEducation,
} = educationSlice.actions;

export const educationReducer = educationSlice.reducer;
