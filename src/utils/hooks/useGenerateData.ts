import { formatArrayToString } from "./../utils/formatArrayToString";
import { useAppSelector } from "@/lib/hooks";
import { GenerateData } from "@/types/GenerateData";
import { formatDate } from "../utils/formatDate";

export const useGenerateData = (): GenerateData => {
  const personal = useAppSelector((state) => state.personal);
  const links = useAppSelector((state) => state.links);
  const education = useAppSelector((state) => state.education.educations);
  const skills = useAppSelector((state) => state.skills.skills);
  const experience = useAppSelector((state) => state.experience.experiences);
  const projects = useAppSelector((state) => state.projects.projects);
  const relevant_coursework = useAppSelector(
    (state) => state.education.relevant_coursework
  );

  return {
    first_name: personal.first_name,
    last_name: personal.last_name,
    email: personal.email,
    phone_number: personal.phone_number,
    github_link: links.github,
    linkedin_link: links.linkedin,
    location: personal.country,
    education: education.map((edu) => ({
      ...edu,
      start_date: edu.start_date ? formatDate(edu.start_date) : "",
      end_date: edu.end_date ? formatDate(edu.end_date) : "",
    })),
    skills: Object.entries(skills).map(([category, skill_set]) => ({
      category,
      skill_set: formatArrayToString(skill_set),
    })),
    experience: experience.map((exp) => ({
      ...exp,
      start_date: exp.start_date ? formatDate(exp.start_date) : "",
      end_date: exp.end_date ? formatDate(exp.end_date) : "",
    })),
    projects: projects.map((proj) => ({
      ...proj,
      start_date: proj.start_date ? formatDate(proj.start_date) : "",
      end_date: proj.end_date ? formatDate(proj.end_date) : "",
      tech_used: formatArrayToString(proj.tech_used),
    })),
    relevant_coursework: relevant_coursework,
  };
};
