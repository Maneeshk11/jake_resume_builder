import { addDescriptionPoint, ExperienceState, removeDescriptionPoint, removeExperience, setCompanyName, setCurrentlyWorking, setDescription, setEndDate, setExperienceType, setLocation, setPositionTitle, setStartDate } from "@/lib/features/experience/experienceSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button, Card, CardBody, CardHeader, Checkbox, DateInput, DateValue, Input, Select, SelectItem, Spacer, Textarea } from "@nextui-org/react"
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
                        selectedKeys={[experience.experience_type]}
                        onChange={(e) => dispatch(setExperienceType([e.target.value, index]))}
                    >
                        <SelectItem key={"Full-time"}>Full-time</SelectItem>
                        <SelectItem key={"Part-time"}>Part-time</SelectItem>
                        <SelectItem key={"Internship"}>Internship</SelectItem>
                        <SelectItem key={"Freelance"}>Freelance</SelectItem>
                        <SelectItem key={"Contract"}>Contract</SelectItem>
                        <SelectItem key={"Apprenticeship"}>Apprenticeship</SelectItem>
                        <SelectItem key={"Self-Employed"}>Self-Employed</SelectItem>
                    </Select>
                </div>
                <Spacer y={4} />
                <div className="flex">
                    <DateInput
                        label="Start Date"  
                        labelPlacement="outside"
                        onChange={(e) => {dispatch(setStartDate([e, index]))}}
                    />
                    <Spacer x={3} />
                    <DateInput
                        label="End Date"
                        labelPlacement="outside"
                        onChange={(e) => {dispatch(setEndDate([e, index]))}}
                        isDisabled={experience.currently_working}
                    />
                </div>
                <Spacer y={4} />
                <Checkbox color="default"
                    onChange={(e) => { 
                        dispatch(setEndDate([{} as DateValue, index]))
                        dispatch(setCurrentlyWorking([e.target.checked, index])) 
                    }}
                >I currently work here</Checkbox>
                <Spacer y={4} />
                <div>
                    <span className="text-sm">Description: (Explain your experience in points)</span>
                    <Spacer y={2} />
                </div>
                {
                    experience.description.map((desc, descIndex) => {
                        return (
                            <>
                                <Textarea
                                    isRequired
                                    variant="flat"
                                    labelPlacement="outside"
                                    placeholder={"Point " + (descIndex + 1)}
                                    className="w-full"
                                    minRows={1}
                                    maxRows={3}
                                    value={experience.description[descIndex]}
                                    endContent={<IoTrashOutline cursor={descIndex > 0 ? "pointer" : "not-allowed"}
                                        color={descIndex > 0 ? "#ff0033" : "#3f3f46"}
                                        onClick={descIndex > 0 ? (() => dispatch(removeDescriptionPoint([descIndex, index]))) : () => { }} />
                                    }
                                    onChange={(e) => { dispatch(setDescription([e.target.value, descIndex, index])) }}
                                />
                                <Spacer y={2} />
                            </>
                        )
                    })
                }
                <div className="flex justify-end">
                    <Button onClick={() => { dispatch(addDescriptionPoint(index)) }}
                        className="w-fit ml-auto"
                    >Add a point</Button>
                </div>

            </CardBody>
        </Card>
    )
}

export default ExperienceItem