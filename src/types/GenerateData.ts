import { EducationState } from "@/lib/features/education/educationSlice";
import { ExperienceState } from "@/lib/features/experience/experienceSlice";
import { ProjectsState } from "@/lib/features/projects/projectsSlice";

export type GenerateData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  github_link: string;
  linkedin_link: string;
  location: string;
  skills: {
    category: string;
    skill_set: string[];
  }[];
  education: EducationState[];
  experience: ExperienceState[];
  projects: ProjectsState[];
  relevant_coursework: string[];
};
