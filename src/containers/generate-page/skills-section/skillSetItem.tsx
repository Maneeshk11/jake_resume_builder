import { addSkill, addSkillSet, removeSkill, removeSkillSet } from "@/lib/features/skills/skillsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button, Chip, Input, Spacer } from "@nextui-org/react"
import { FC, useState } from "react";

interface SkillSetItemProps {
    skillSet: string;
    value: string[];
}

const SkillSetItem: FC<SkillSetItemProps> = ({ skillSet, value }) => {
    const dispatch = useAppDispatch();
    const [skill, setSkill] = useState<string>("")

    return (
        <>
            <div key={skillSet} className="flex items-end w-full">
                <Input
                    type="text"
                    label={`Add ${skillSet}`}
                    placeholder={"Skill"}
                    labelPlacement="outside"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />
                <Spacer x={3} />
                <Button color="default" onClick={(e) => {
                    if (skill === "") return
                    dispatch(addSkill([skillSet, skill]))
                    setSkill("")
                }} >
                    Add Skill
                </Button>
                <Spacer x={3} />
                <Button color="default" fullWidth onClick={(e) => {
                    dispatch(removeSkillSet(skillSet))
                }} >
                    Remove Skill Set
                </Button>
            </div>
            <Spacer y={3} />
            <div className="flex flex-wrap">
                {
                    value.map((skill, _) => {
                        return (
                            <>
                                <Chip onClose={() => { dispatch(removeSkill([skillSet, skill])) }}>
                                    {skill}
                                </Chip>
                                <Spacer x={2} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SkillSetItem