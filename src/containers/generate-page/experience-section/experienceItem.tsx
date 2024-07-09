import { ExperienceState, removeExperience, setCompanyName, setCurrentlyWorking, setDescription, setLocation, setPositionTitle } from "@/lib/features/experience/experienceSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Card, CardBody, CardHeader, Checkbox, DateInput, Input, Select, SelectItem, Spacer, Textarea } from "@nextui-org/react"
import { FC } from "react"
import { IoTrashOutline } from "react-icons/io5";

interface ExperienceItemProps {
    experience: ExperienceState,
    index: number
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience, index }) => {
    const dispatch = useAppDispatch();

    return (
        <Card className="p-2">
            <CardHeader className="font-medium w-full flex justify-between">
                <span>Experience {index + 1}</span>
                <IoTrashOutline cursor={index > 0 ? "pointer" : "not-allowed"}
                    size={21}
                    color={index > 0 ? "#ff0033" : "#3f3f46"}
                    onClick={index > 0 ? (() => dispatch(removeExperience(index))) : () => { }}
                />
            </CardHeader>
            <CardBody>
                <div className="flex">
                    <Input
                        type="text"
                        label="Company"
                        labelPlacement={"outside"}
                        placeholder={"Company"}
                        value={experience.company_name}
                        onChange={(e) => dispatch(setCompanyName([e.target.value, index]))}
                    />
                    <Spacer x={3} />
                    <Input
                        type="text"
                        label="Location"
                        labelPlacement={"outside"}
                        placeholder={"Type City, Country"}
                        value={experience.location}
                        onChange={(e) => dispatch(setLocation([e.target.value, index]))}
                    />
                </div>
                <Spacer y={4} />
                <div className="flex">
                    <Input
                        type="text"
                        label="Position Title"
                        labelPlacement={"outside"}
                        placeholder={"Title"}
                        value={experience.position_title}
                        onChange={(e) => dispatch(setPositionTitle([e.target.value, index]))}
                    />
                    <Spacer x={3} />
                    <Select
                        variant="bordered"
                        label="Experience Type"
                        placeholder="Type"
                        labelPlacement="outside"
                    >
                        <SelectItem key={"fulltime"}>Full-time</SelectItem>
                        <SelectItem key={"parttime"}>Part-time</SelectItem>
                        <SelectItem key={"internship"}>Internship</SelectItem>
                        <SelectItem key={"freelance"}>Freelance</SelectItem>
                        <SelectItem key={"contract"}>Contract</SelectItem>
                        <SelectItem key={"apprenticeship"}>Apprenticeship</SelectItem>
                        <SelectItem key={"selfemployed"}>Self Employed</SelectItem>
                    </Select>
                </div>
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
                        isDisabled={experience.currently_working}
                    />
                </div>
                <Spacer y={4} />
                <Checkbox color="default"
                    onChange={(e) => { dispatch(setCurrentlyWorking([e.target.checked, index])) }}
                >I currently work here</Checkbox>
                <Spacer y={4} />
                <Textarea
                    isRequired
                    variant="flat"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="A couple sentences about your role"
                    className="w-full"
                    onChange={(e) => { dispatch(setDescription([e.target.value, index])) }}
                />
            </CardBody>
        </Card>
    )
}

export default ExperienceItem