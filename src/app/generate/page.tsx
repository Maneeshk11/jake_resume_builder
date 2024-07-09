"use client";


import PersonalSection from "@/containers/generate-page/personal-section";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import StoreProvider from "../providers";
import LinksSection from "@/containers/generate-page/links-section";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import EducationSection from "@/containers/generate-page/education-section";
import ExperienceSection from "@/containers/generate-page/experience-section";
import ProjectsSection from "@/containers/generate-page/projects-section";
import SkillsSection from "@/containers/generate-page/skills-section";

export default function GeneratePage() {
    const dispatch = useAppDispatch();
    const activeTab: string = useAppSelector((state) => state.navigation.activeTab);

    return (
        <div className="w-full">
            <Tabs aria-label="Options" selectedKey={activeTab} variant="bordered" classNames={{ wrapper: "" }} >
                <Tab key="personal" title="Personal" data-pressed={() => dispatch(setActiveTab("links"))}>
                    <PersonalSection />
                </Tab>
                <Tab key="links" title="Links" onClick={() => dispatch(setActiveTab("links"))}>
                    <LinksSection />
                </Tab>
                <Tab key="education" title="Education" onClick={() => dispatch(setActiveTab("education"))}>
                    <EducationSection />
                </Tab>
                <Tab key="experience" title="Experience" onClick={() => dispatch(setActiveTab("experience"))}>
                    <ExperienceSection />
                </Tab>
                <Tab key="projects" title="Projects" onClick={() => dispatch(setActiveTab("projects"))}>
                    <ProjectsSection />
                </Tab>
                <Tab key="skills" title="Skills" onClick={() => dispatch(setActiveTab("projects"))}>
                    <SkillsSection />
                </Tab>
                <Tab key="confirm" title="Confirm"></Tab>
            </Tabs>
        </div>
    )
}