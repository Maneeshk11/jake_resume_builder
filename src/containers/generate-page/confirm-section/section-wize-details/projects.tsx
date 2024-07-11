import SectionWiseHeader from "@/components/section-wize-header"
import { useAppSelector } from "@/lib/hooks"
import { Chip, Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"


const Projects = () => {
    const projects = useAppSelector((state) => state.projects.projects)

    return (
        <div>
            <SectionWiseHeader title="Project Details" tabName="projects" />
            <Spacer y={2} />

            {
                projects.map((proj, index) => {
                    return (
                        <>
                            <Table>
                                <TableHeader>
                                    <TableColumn width={"30%"}>Project {index + 1}</TableColumn>
                                    <TableColumn>{""}</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Project Title</TableCell>
                                        <TableCell>{proj.project_title || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Tech Used</TableCell>
                                        <TableCell>{proj.tech_used &&
                                            <div className="flex">
                                                {
                                                    proj.tech_used.map((tech, index) => {
                                                        return (
                                                            <>
                                                                <Chip>{tech}</Chip>
                                                                <Spacer x={2} />
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div> || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>{proj.start_date?.toString() || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>End Date</TableCell>
                                        <TableCell>{proj.end_date?.toString() || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell className="flex flex-col gap-y-2">
                                            {
                                                proj.description.map((desc, index) => {
                                                    return (
                                                        <li>{desc}</li>
                                                    )
                                                })
                                            }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Spacer y={3} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Projects