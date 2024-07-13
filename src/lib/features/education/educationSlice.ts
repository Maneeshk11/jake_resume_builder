import { DateValue } from "@nextui-org/react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface EducationState {
  school_name: string;
  major: string;
  degree_type: string;
  start_date: DateValue | null ;
  end_date: DateValue | null;
  location: string;
}

const initialState = {
  count: 1,
  educations: [
    {
      school_name: "",
      major: "",
      degree_type: "",
      start_date: null,
      end_date: null,
      location: "",
    },
  ] as EducationState[],
  relevant_coursework: [] as string[],
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
        start_date: null,
        end_date: null,
        location: "",
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
    setLocation: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].location = value;
    },
    setDegreeType: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].degree_type = value;
    },
    setStartDate: (state, action: PayloadAction<[DateValue, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].start_date = value;
    },
    setEndDate: (state, action: PayloadAction<[DateValue, number]>) => {
      const [value, index] = action.payload;
      state.educations[index].end_date = value;
    },
    addCoursework: (state, action: PayloadAction<string>) => {
      state.relevant_coursework.push(action.payload);
    },
    removeCoursework: (state, action: PayloadAction<string>) => {
      state.relevant_coursework = state.relevant_coursework.filter(
        (s) => s !== action.payload
      );
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
  setLocation,
  addCoursework,
  removeCoursework,
} = educationSlice.actions;

export const educationReducer = educationSlice.reducer;
