
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
    skill_set: string;
  }[];
  education: {
    school_name: string;
    major: string;
    degree_type: string;
    start_date: string | null;
    end_date: string | null;
    location: string;
  }[];
  experience: {
    company_name: string;
    location: string;
    position_title: string;
    experience_type: string;
    start_date: string | null;
    end_date: string | null;
    currently_working: boolean;
    description: string[];
  }[];
  projects: {
    project_title: string;
    tech_used: string;
    start_date: string | null;
    end_date: string | null;
    description: string[];
  }[];
  relevant_coursework: string[];
};
