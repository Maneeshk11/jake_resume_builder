import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { personalReducer } from "./features/personal/personalSlice";
import { linksReducer } from "./features/links/linksSlice";
import { navigationReducer } from "./features/navigation/navigationSlice";
import { educationReducer } from "./features/education/educationSlice";
import { experienceReducer } from "./features/experience/experienceSlice";
import { projectsReducer } from "./features/projects/projectsSlice";
import { skillsReducer } from "./features/skills/skillsSlice";
import { generateReducer } from "./features/generate/generateSlice";

const rootReducer = combineReducers({
    navigation: navigationReducer,
    personal: personalReducer,
    links: linksReducer,
    education: educationReducer,
    experience: experienceReducer,
    projects: projectsReducer,
    skills: skillsReducer,
    generate: generateReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
