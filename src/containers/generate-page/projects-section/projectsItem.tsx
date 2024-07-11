import { addDescriptionPoint, ProjectsState, removeDescriptionPoint, removeProject, removeTechUsed, setDescription, setProjectTitle, setStartDate, setTechUsed } from "@/lib/features/projects/projectsSlice";
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
                        onChange={(e) => {dispatch(setStartDate([e, index]))}}
                    />
                    <Spacer x={3} />
                    <DateInput
                        label="End Date"
                        labelPlacement="outside"
                    />
                </div>
                <Spacer y={4} />
                <>
                    <div>
                        <span className="text-sm">Description: (Explain your project in points)</span>
                        <Spacer y={2} />
                    </div>
                    {
                        project.description.map((desc, descIndex) => {
                            return (
                                <>
                                    <Textarea
                                        isRequired
                                        variant="flat"
                                        labelPlacement="outside"
                                        placeholder={"Point " + (descIndex + 1)}
                                        className="w-full"
                                        minRows={1}
                                        maxRows={3}
                                        value={project.description[descIndex]}
                                        endContent={<IoTrashOutline cursor={descIndex > 0 ? "pointer" : "not-allowed"}
                                            color={descIndex > 0 ? "#ff0033" : "#3f3f46"}
                                            onClick={descIndex > 0 ? (() => dispatch(removeDescriptionPoint([descIndex, index]))) : () => { }} />
                                        }
                                        onChange={(e) => { dispatch(setDescription([e.target.value, descIndex, index])) }}
                                    />
                                    <Spacer y={2} />
                                </>
                            )
                        })
                    }
                    <div className="flex justify-end">
                        <Button onClick={() => { dispatch(addDescriptionPoint(index)) }}
                            className="w-fit ml-auto"
                        >Add a point</Button>
                    </div>
                </>
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