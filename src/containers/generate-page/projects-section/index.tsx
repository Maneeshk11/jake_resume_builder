import ProjectsItem from "./projectsItem"; 
import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { addProject } from "@/lib/features/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Card, CardBody, CardFooter, Spacer } from "@nextui-org/react"


const ProjectsSection = () => {
    const dispatch = useAppDispatch();
    const projects = useAppSelector((state) => state.projects.projects);
    return (
        <Card isBlurred>
            <CardBody className="py-8">
                <span className="text-center font-semibold text-2xl text-wrap">List your relevant Projects</span>
                <Spacer y={5} />
                {
                    projects.map((proj, index) => {
                        return (
                            <>
                                <ProjectsItem project={proj} index={index} />
                                <Spacer y={5} />
                            </>
                        )
                    })
                }
                <Button color="default" onClick={() => dispatch(addProject())}>
                    Add More
                </Button>
            </CardBody>
            <CardFooter className="w-full flex justify-end">
                <Button color="default" onClick={() => dispatch(setActiveTab("experience"))} >
                    Previous
                </Button>
                <Spacer x={4} />
                <Button color="default" onClick={() => dispatch(setActiveTab("skills"))}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectsSection