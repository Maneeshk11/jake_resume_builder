import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button, Card, CardBody, CardFooter, Input, Spacer } from "@nextui-org/react"


const SkillsSection = () => {
    const dispatch = useAppDispatch();

    return (
        <Card isBlurred>
            <CardBody className="py-8">
                <span className="text-center font-semibold text-2xl text-wrap">Show off your skills</span>
                <Spacer y={5} />

            </CardBody>
            <CardFooter className="w-full flex justify-end">
                <Button color="default" onClick={() => dispatch(setActiveTab("projects"))} >
                    Previous
                </Button>
                <Spacer x={4} />
                <Button color="default" onClick={() => dispatch(setActiveTab("confirm"))}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    )
}

export default SkillsSection