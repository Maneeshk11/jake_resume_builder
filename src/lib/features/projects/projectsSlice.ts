import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProjectsState {
  project_title: string;
  tech_used: string[];
  start_date: string;
  end_date: string;
  description: string;
}

const initialState = {
  count: 1,
  projects: [
    {
      project_title: "",
      tech_used: [],
      start_date: "",
      end_date: "",
      description: "",
    },
  ] as ProjectsState[],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state) => {
      state.count++;
      state.projects.push({
        project_title: "",
        tech_used: [],
        start_date: "",
        end_date: "",
        description: "",
      });
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.count--;
      state.projects.splice(action.payload, 1);
    },
    updateProject: (state, action) => {
      state.projects[action.payload.index] = action.payload.project;
    },
    setProjectTitle: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.projects[index].project_title = value;
    },
    setTechUsed: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.projects[index].tech_used.push(value);
    },
    removeTechUsed: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.projects[index].tech_used = state.projects[index].tech_used.filter(
        (tech) => tech !== value
      );
    },
    setStartDate: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.projects[index].start_date = value;
    },
    setEndDate: (state, action: PayloadAction<[string, number]>) => {
      const [date, index] = action.payload;
      state.projects[index].end_date = date;
    },
    setDescription: (state, action: PayloadAction<[string, number]>) => {
      const [value, index] = action.payload;
      state.projects[index].description = value;
    },
  },
});

export const {
  addProject,
  removeProject,
  updateProject,
  setProjectTitle,
  setTechUsed,
  setStartDate,
  setEndDate,
  setDescription,
  removeTechUsed,
} = projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
