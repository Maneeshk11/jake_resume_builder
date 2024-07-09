import ExperienceItem from "./experienceItem";
import { addExperience } from "@/lib/features/experience/experienceSlice";
import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Card, CardBody, CardFooter, Spacer } from "@nextui-org/react"


const ExperienceSection = () => {
    const dispatch = useAppDispatch();
    const experiences = useAppSelector((state) => state.experience.experiences);

    return (
        <Card isBlurred>
            <CardBody className="py-8">
                <span className="text-center font-semibold text-2xl text-wrap">Let's talk about your work experiences</span>
                <Spacer y={5} />
                {
                    experiences.map((exp, index) => {
                        return (
                            <>
                                <ExperienceItem experience={exp} index={index} />
                                <Spacer y={5} />
                            </>
                        )
                    })
                }
                <Button color="default" onClick={() => dispatch(addExperience())}>
                    Add More
                </Button>
            </CardBody>
            <CardFooter className="w-full flex justify-end">
                <Button color="default" onClick={() => dispatch(setActiveTab("education"))} >
                    Previous
                </Button>
                <Spacer x={4} />
                <Button color="default" onClick={() => dispatch(setActiveTab("projects"))}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ExperienceSection