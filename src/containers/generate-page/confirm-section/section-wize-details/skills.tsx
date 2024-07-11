import SectionWiseHeader from "@/components/section-wize-header"
import { useAppSelector } from "@/lib/hooks"
import { Chip, Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"


const Skills = () => {
    const skills = useAppSelector((state) => state.skills.skills)

    return (
        <div>
            <SectionWiseHeader title="Skills" tabName="skills" />
            <Spacer y={2} />
            <>
                <Table isStriped>
                    <TableHeader className="">
                        <TableColumn width={"30%"}>Skill Set</TableColumn>
                        <TableColumn>{""}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            Object.entries(skills).map(([skillset, skillsArr]) => {
                                return (
                                    <TableRow>
                                        <TableCell>{skillset}</TableCell>
                                        <TableCell >
                                            <div className="flex flex-wrap gap-y-1.5">
                                                {
                                                    skillsArr.map((sk, _) => {
                                                        return (
                                                            <>
                                                                <Chip>{sk}</Chip>
                                                                <Spacer x={2}/>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
                <Spacer y={3} />
            </>

        </div>
    )
}

export default Skills