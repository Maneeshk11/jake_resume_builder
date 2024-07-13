import { setActiveTab } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button, Card, CardBody, CardFooter, Spacer } from "@nextui-org/react"
import Personal from "./section-wize-details/personal";
import Links from "./section-wize-details/links";
import Education from "./section-wize-details/education";
import Experience from "./section-wize-details/experience";
import Projects from "./section-wize-details/projects";
import Skills from "./section-wize-details/skills";
import RelevantCoursework from "./section-wize-details/relevant_coursework";
import { GenerateResume } from "@/utils/api/generateResume";
import { useGenerateData } from "@/utils/hooks/useGenerateData";
import { setBlobUrl, setConfirm, setLoaded } from "@/lib/features/generate/generateSlice";


const ConfirmSection = () => {
    const dispatch = useAppDispatch();
    const data = useGenerateData();

    return (
        <Card isBlurred>
            <CardBody className="py-8">
                <span className="text-center font-semibold text-2xl text-wrap">Confirm your entered details</span>
                <Spacer y={6} />
                <Personal />
                <Spacer y={6} />
                <Links />
                <Spacer y={6} />
                <Education />
                <Spacer y={6} />
                <RelevantCoursework />
                <Spacer y={6} />
                <Experience />
                <Spacer y={6} />
                <Projects />
                <Spacer y={6} />
                <Skills />
            </CardBody>
            <CardFooter className="w-full flex justify-end">
                <Button color="default" onClick={() => dispatch(setActiveTab("skills"))} >
                    Previous
                </Button>
                <Spacer x={4} />
                <Button color="default" onClick={async () => {
                    dispatch(setConfirm(true))
                    try {
                        const blobUrl = await GenerateResume(data)
                        dispatch(setLoaded(true));
                        dispatch(setBlobUrl(blobUrl))
                    } catch (error) {
                        console.log(error)
                        dispatch(setConfirm(false))
                    }
                }
                }>
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ConfirmSection