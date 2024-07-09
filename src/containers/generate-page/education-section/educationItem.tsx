import { EducationState, removeEducation, setMajor, setSchoolName } from "@/lib/features/education/educationSlice"
import { useAppDispatch } from "@/lib/hooks";
import { Card, CardBody, CardHeader, DateInput, Input, Select, SelectItem, Spacer } from "@nextui-org/react"
import { FC } from "react"
import { IoTrashOutline } from "react-icons/io5";

interface EducationItemProps {
    education: EducationState,
    index: number
}

const EducationItem: FC<EducationItemProps> = ({ education, index }) => {
    const dispatch = useAppDispatch();

    return (
        <Card className="p-2">
            <CardHeader className="font-medium w-full flex justify-between">
                <span>Education {index + 1}</span>
                <IoTrashOutline cursor={index > 0 ? "pointer" : "not-allowed"}
                    size={21}
                    color={index > 0 ? "#ff0033" : "#3f3f46"}
                    onClick={index > 0 ? (() => dispatch(removeEducation(index))) : () => {}}
                />
            </CardHeader>
            <CardBody>
                <Input
                    type="email"
                    label="School Name"
                    labelPlacement={"outside"}
                    placeholder={"School Name"}
                    value={education.school_name}
                    onChange={(e) => dispatch(setSchoolName([e.target.value, index]))}
                />
                <Spacer y={4} />
                <Input
                    type="email"
                    label="Major"
                    labelPlacement={"outside"}
                    placeholder={"Major"}
                    value={education.major}
                    onChange={(e) => dispatch(setMajor([e.target.value, index]))}
                />
                <Spacer y={4} />
                <Select
                    variant="bordered"
                    label="Degree Type"
                    placeholder="Degree"
                    labelPlacement="outside"
                >
                    <SelectItem key={"B.Tech"}>B.Tech</SelectItem>
                    <SelectItem key={"B.Arts"}>B.Arts</SelectItem>
                    <SelectItem key={"B.Ed"}>B.Ed</SelectItem>
                    <SelectItem key={"MS"}>Master of Science</SelectItem>
                </Select>
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
            </CardBody>
        </Card>
    )
}

export default EducationItem