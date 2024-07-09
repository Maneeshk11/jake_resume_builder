import EducationItem from "./educationItem"; 
import { addEducation } from "@/lib/features/education/educationSlice";
import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Card, CardBody, CardFooter, Spacer } from "@nextui-org/react"


const EducationSection = () => {
    const dispatch = useAppDispatch();
    const educations = useAppSelector((state) => state.education.educations);
    return (
        <Card isBlurred>
            <CardBody className="py-8">
                <span className="text-center font-semibold text-2xl">Education History</span>
                <Spacer y={5} />
                {
                    educations.map((education, index) => {
                        return (
                            <>
                                <EducationItem education={education} index={index} />
                                <Spacer y={5} />
                            </>
                        )
                    })
                }
                <Button color="default" onClick={() => dispatch(addEducation())}>
                    Add More
                </Button>
            </CardBody>
            <CardFooter className="w-full flex justify-end">
                <Button color="default" onClick={() => dispatch(setActiveTab("links"))} >
                    Previous
                </Button>
                <Spacer x={4} />
                <Button color="default" onClick={() => dispatch(setActiveTab("experience"))}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    )
}

export default EducationSection