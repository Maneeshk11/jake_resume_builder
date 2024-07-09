import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { PersonalState, setAddressLine, setCountry, setEmail, setFirstName, setLastName, setPhoneNumber } from "@/lib/features/personal/personalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Card, CardBody, Button, Spacer, CardHeader } from "@nextui-org/react"
import { Input } from "@nextui-org/react";


const PersonalSection = () => {
    const dispatch = useAppDispatch();
    const personalDetails: PersonalState = useAppSelector((state) => state.personal);

    return (
        <Card isBlurred>
            <CardBody className="p-8" >
                <div className="flex flex-col items-center w-full">
                    <span className="font-semibold text-2xl">Let's get started!</span>
                    <Spacer y={4} />
                    <div className="flex flex-col gap-5 items-start w-full">
                        <span className="font-medium">First, let's get your first and last name.</span>
                        <Spacer y={2} />
                        <div className="flex flex-col gap-2 w-full">
                            <Input type="text" variant={"bordered"} label="First Name" value={personalDetails.first_name}
                                onChange={(e) => dispatch(setFirstName(e.target.value))} />
                            <Input type="text" variant={"bordered"} label="Last Name" value={personalDetails.last_name}
                                onChange={(e) => dispatch(setLastName(e.target.value))} />
                        </div>
                    </div>
                    <Spacer y={4} />
                    <div className="flex flex-col gap-5 items-start w-full">
                        <span className="font-medium">Now, enter your address.</span>
                        <Spacer y={2} />
                        <div className="flex flex-col gap-2 w-full">
                            <Input type="text" variant={"bordered"} label="Address Line" value={personalDetails.address_line}
                                onChange={(e) => dispatch(setAddressLine(e.target.value))} />
                            <Input type="text" variant={"bordered"} label="City/Country" value={personalDetails.country}
                                onChange={(e) => dispatch(setCountry(e.target.value))} />
                        </div>
                    </div>
                    <Spacer y={4} />
                    <div className="flex flex-col gap-5 items-start w-full">
                        <span className="font-medium">Finally, enter your contact details.</span>
                        <Spacer y={2} />
                        <div className="flex flex-col gap-2 w-full">
                            <Input type="email" variant={"bordered"} label="Email" value={personalDetails.email}
                                onChange={(e) => dispatch(setEmail(e.target.value))} />
                            <Input type="text" variant={"bordered"} label="Phone number (with country code)" value={personalDetails.phone_number}
                                onChange={(e) => dispatch(setPhoneNumber(e.target.value))} />
                        </div>
                    </div>
                    <Spacer y={4} />
                    <div className="flex justify-end w-full">
                        <Button color="default" onClick={()=>dispatch(setActiveTab("links"))} >
                            Next
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default PersonalSection