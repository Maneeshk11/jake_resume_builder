"use client";


import PersonalSection from "@/containers/generate-page/personal-section";
import { Button, Card, Link, Spacer, Tab, Tabs } from "@nextui-org/react";
import LinksSection from "@/containers/generate-page/links-section";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import EducationSection from "@/containers/generate-page/education-section";
import ExperienceSection from "@/containers/generate-page/experience-section";
import ProjectsSection from "@/containers/generate-page/projects-section";
import SkillsSection from "@/containers/generate-page/skills-section";
import ConfirmSection from "@/containers/generate-page/confirm-section";
import { Spinner } from "@nextui-org/react";
import { setBlobUrl, setConfirm, setLoaded } from "@/lib/features/generate/generateSlice";

export default function GeneratePage() {
    const dispatch = useAppDispatch();
    const activeTab: string = useAppSelector((state) => state.navigation.activeTab);
    const isConfirm: boolean = useAppSelector((state) => state.generate.isConfirm);
    const isLoaded: boolean = useAppSelector((state) => state.generate.isLoaded);
    const blobUrl: string = useAppSelector((state) => state.generate.blobUrl);

    return (
        <div className="w-full">
            {
                !isConfirm ?
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
                        <Tab key="confirm" title="Confirm">
                            <ConfirmSection />
                        </Tab>
                    </Tabs>
                    :
                    <Card className="p-8" isBlurred>
                        <Spacer y={10} />
                        {
                            !isLoaded ? <Spinner size="lg" label="Generating your resume" color="secondary" labelColor="secondary" /> :
                                <div>
                                    <span className="text-center font-semibold text-2xl text-wrap">Your resume is ready</span>
                                    <Spacer y={6} />
                                    <div className="flex justify-center">
                                        <Button onClick={() => window.open(blobUrl, '_blank')}>View</Button>
                                        <Spacer x={6} />
                                        <Link download={"resume.pdf"}>
                                            <Button>Download</Button>
                                        </Link>
                                    </div>
                                    <Spacer y={6} />
                                    <Button onClick={() => {
                                        dispatch(setActiveTab("personal"));
                                        dispatch(setConfirm(false));
                                        dispatch(setLoaded(false));
                                        setBlobUrl("");
                                    }}>Generate New Resume</Button>
                                </div>
                        }


                    </Card>
            }
        </div>
    )
}