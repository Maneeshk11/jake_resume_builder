import SectionWiseHeader from "@/components/section-wize-header"
import { useAppSelector } from "@/lib/hooks"
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"


const Experience = () => {
    const experiences = useAppSelector((state) => state.experience.experiences)

    return (
        <div>
            <SectionWiseHeader title="Experience Details" tabName="experience" />
            <Spacer y={2} />

            {
                experiences.map((exp, index) => {
                    return (
                        <>
                            <Table>
                                <TableHeader>
                                    <TableColumn>Experience {index + 1}</TableColumn>
                                    <TableColumn>{""}</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Company Name</TableCell>
                                        <TableCell>{exp.company_name || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Location</TableCell>
                                        <TableCell>{exp.location || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Position Title</TableCell>
                                        <TableCell>{exp.position_title || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Experience Type</TableCell>
                                        <TableCell>{exp.experience_type || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>{exp.start_date || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>End Date</TableCell>
                                        <TableCell>{exp.currently_working ? "Currently working" : exp.end_date || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell>{exp.description || "-"}</TableCell>
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

export default Experience