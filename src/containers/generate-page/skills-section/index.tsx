import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { addSkillSet } from "@/lib/features/skills/skillsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Card, CardBody, CardFooter, Input, Spacer } from "@nextui-org/react"
import { useState } from "react";
import SkillSetItem from "./skillSetItem";


const SkillsSection = () => {
    const dispatch = useAppDispatch();
    const [skillSet, setSkillSet] = useState<string>("")
    const skills = useAppSelector((state) => state.skills.skills)

    return (
        <Card isBlurred>
            <CardBody className="py-8">
                <span className="text-center font-semibold text-2xl text-wrap">Show off your skills</span>
                <Spacer y={5} />
                <div className="flex items-center">
                    <Input
                        type="text"
                        label="Add Skill Set"
                        placeholder={"Ex: Technical Skills/Frameworks"}
                        onChange={(e) => setSkillSet(e.target.value)}
                        value={skillSet}
                    />
                    <Spacer x={3} />
                    <Button color="default" size="lg" onClick={() => {
                        if (skillSet === "") return
                        dispatch(addSkillSet(skillSet))
                        setSkillSet("")
                    }} >
                        Add
                    </Button>
                </div>
                <Spacer y={8} />
                <div>
                    {
                        Object.entries(skills).map(([key, value]) => {
                            return (
                                <>
                                    <SkillSetItem skillSet={key} value={value} />
                                    <Spacer y={5} />
                                </>
                            )
                        })
                    }
                </div>

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