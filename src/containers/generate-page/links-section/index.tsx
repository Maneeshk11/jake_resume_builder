import { GithubIcon } from "@/components/icons";
import { LinksState, setGithub, setLinkedin, setPortfolio } from "@/lib/features/links/linksSlice";
import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Card, CardBody, CardHeader, Image, Spacer, divider } from "@nextui-org/react"
import { Input } from "@nextui-org/react";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const LinksSection = () => {

    const dispatch = useAppDispatch();
    const links: LinksState = useAppSelector((state) => state.links);

    return (
        <Card isBlurred className="">
            <CardBody className="py-8">
                <span className="font-semibold text-2xl flex justify-center">Upload your links</span>
                <Spacer y={6} />
                <div >
                    <Input
                        type="link"
                        variant="bordered"
                        label="LinkedIn URL"
                        labelPlacement="outside"
                        startContent={
                            <FaLinkedinIn size={18} />
                        }
                        value={links.linkedin}
                        onChange={(e) => dispatch(setLinkedin(e.target.value))}
                    />
                    <Spacer y={5} />
                    <Input
                        type="link"
                        variant="bordered"
                        label="GitHub URL"
                        labelPlacement="outside"
                        startContent={
                            <GithubIcon />
                        }
                        value={links.github}
                        onChange={(e) => dispatch(setGithub(e.target.value))}
                    />
                    <Spacer y={5} />
                    <Input
                        type="link"
                        variant="bordered"
                        label="Portfolio URL"
                        labelPlacement="outside"
                        startContent={
                            <TbWorld size={24} />
                        }
                        value={links.portfolio}
                        onChange={(e) => dispatch(setPortfolio(e.target.value))}
                    />
                </div>
                <Spacer y={6} />
                <div className="flex justify-end w-full">
                    <Button color="default" onClick={()=>dispatch(setActiveTab("personal"))} >
                        Previous
                    </Button>
                    <Spacer x={4}/>
                    <Button color="default" onClick={()=>dispatch(setActiveTab("education"))} >
                        Next
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default LinksSection