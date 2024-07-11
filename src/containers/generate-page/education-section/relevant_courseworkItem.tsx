import { addCoursework, removeCoursework } from "@/lib/features/education/educationSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { Button, Chip, Input, Spacer } from "@nextui-org/react"
import { useState } from "react"

const RelevantCourseworkItem = () => {
    const [course, setCourse] = useState<string>("")
    const dispatch = useAppDispatch()
    const coursework = useAppSelector((state) => state.education.relevant_coursework)

    return (
        <>
            <div className="flex items-end w-full">
                <Input
                    type="text"
                    label={`Add course`}
                    placeholder={"Coursework"}
                    labelPlacement="outside"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <Spacer x={3} />
                <Button color="default" isDisabled={coursework.length >= 8} onClick={(e) => {
                    if (course === "") return
                    dispatch(addCoursework(course))
                    setCourse("")
                }} >
                    Add Course
                </Button>
            </div>
            <Spacer y={3} />
            <div className="flex flex-wrap gap-y-2">
                {
                    coursework.map((item, _) => {
                        return (
                            <>
                                <Chip onClose={() => { dispatch(removeCoursework(item)) }}>
                                    {item}
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

export default RelevantCourseworkItem