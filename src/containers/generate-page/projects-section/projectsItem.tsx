import { ProjectsState, removeProject, removeTechUsed, setDescription, setProjectTitle, setTechUsed } from "@/lib/features/projects/projectsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button, Card, CardBody, CardHeader, Chip, DateInput, Input, Spacer, Textarea } from "@nextui-org/react";
import { FC, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

interface ProjectsItemProps {
    project: ProjectsState;
    index: number;
}

const ProjectsItem: FC<ProjectsItemProps> = ({ project, index }) => {
    const dispatch = useAppDispatch();
    const [techItem, setTechItem] = useState<string>("");

    return (
        <Card className="p-2">
            <CardHeader className="font-medium w-full flex justify-between">
                <span>Project {index + 1}</span>
                <IoTrashOutline cursor={index > 0 ? "pointer" : "not-allowed"}
                    size={21}
                    color={index > 0 ? "#ff0033" : "#3f3f46"}
                    onClick={index > 0 ? (() => dispatch(removeProject(index))) : () => { }}
                />
            </CardHeader>
            <CardBody>
                <Input
                    type="text"
                    label="Project Title"
                    labelPlacement={"outside"}
                    placeholder={"Title"}
                    value={project.project_title}
                    onChange={(e) => dispatch(setProjectTitle([e.target.value, index]))}
                />
                <Spacer y={4} />
                <div className="flex">
                    <DateInput
                        label="Start Date"
                        labelPlacement="outside"
                    />
                    <Spacer x={3} />
                    <DateInput
                        label="End Date"
                        labelPlacement="outside"
                    />
                </div>
                <Spacer y={4} />
                <Textarea
                    // isRequired
                    variant="flat"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="A couple sentences about this project"
                    className="w-full"
                    onChange={(e) => { dispatch(setDescription([e.target.value, index])) }}
                />
                <Spacer y={4} />
                <div>
                    <span className="text-sm">List tools and technologies used: (Max 5)</span>
                    <Spacer y={2} />
                    <div className="flex items-center">
                        <Input
                            type="text"
                            label="Tech Used"
                            // labelPlacement={"outside"}
                            placeholder={"Type Technology used"}
                            onChange={(e) => setTechItem(e.target.value)}
                            value={techItem}
                        />
                        <Spacer x={3} />
                        <Button onClick={() => {
                            if (techItem === "" || project.tech_used.length >= 5) {
                                return;
                            }
                            dispatch(setTechUsed([techItem, index]))
                            setTechItem("");
                        }}>Add</Button>
                    </div>
                    <Spacer y={3} />
                    <div className="flex flex-wrap">
                        {
                            project.tech_used.map((tech, _) => {
                                return (
                                    <>
                                        <Chip onClose={() => { dispatch(removeTechUsed([tech, index])) }}>
                                            {tech}
                                        </Chip>
                                        <Spacer x={2} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </CardBody>
        </Card>
    )
}

export default ProjectsItem