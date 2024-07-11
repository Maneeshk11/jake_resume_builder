import { EducationState, removeEducation, setDegreeType, setEndDate, setLocation, setMajor, setSchoolName, setStartDate } from "@/lib/features/education/educationSlice"
import { useAppDispatch } from "@/lib/hooks";
import { Card, CardBody, CardHeader, DateInput, DateValue, Input, Select, SelectItem, Spacer } from "@nextui-org/react"
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
                    onClick={index > 0 ? (() => dispatch(removeEducation(index))) : () => { }}
                />
            </CardHeader>
            <CardBody>
                <div className="flex">
                    <Input
                        type="text"
                        label="School Name"
                        labelPlacement={"outside"}
                        placeholder={"School Name"}
                        value={education.school_name}
                        onChange={(e) => dispatch(setSchoolName([e.target.value, index]))}
                    />
                    <Spacer x={3} />
                    <Input
                        type="text"
                        label="Location"
                        labelPlacement={"outside"}
                        placeholder={"Location"}
                        value={education.location}
                        onChange={(e) => dispatch(setLocation([e.target.value, index]))}
                    />
                </div>
                <Spacer y={4} />
                <div className="flex">
                    <Input
                        type="text"
                        label="Major"
                        labelPlacement={"outside"}
                        placeholder={"Major"}
                        value={education.major}
                        onChange={(e) => dispatch(setMajor([e.target.value, index]))}
                    />
                    <Spacer x={3} />
                    <Select
                        variant="bordered"
                        label="Degree Type"
                        placeholder="Degree"
                        labelPlacement="outside"
                        onChange={(e) => dispatch(setDegreeType([e.target.value, index]))}
                        selectedKeys={[education.degree_type]}
                    >
                        <SelectItem key={"B.Tech"}>B.Tech</SelectItem>
                        <SelectItem key={"B.Arts"}>B.Arts</SelectItem>
                        <SelectItem key={"B.Ed"}>B.Ed</SelectItem>
                        <SelectItem key={"MS"}>Master of Science</SelectItem>
                    </Select>
                </div>
                <Spacer y={4} />
                <div className="flex">
                    <DateInput
                        label="Start Date"
                        labelPlacement="outside"
                        onChange={(e) => {
                            dispatch(setStartDate([e, index]))
                            console.log(e)
                        }}
                    />
                    <Spacer x={3} />
                    <DateInput
                        label="End Date"
                        labelPlacement="outside"
                        onChange={(e) => {dispatch(setEndDate([e, index]))}}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

export default EducationItem