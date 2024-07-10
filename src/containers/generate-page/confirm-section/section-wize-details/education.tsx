import SectionWiseHeader from "@/components/section-wize-header"
import { useAppSelector } from "@/lib/hooks"
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"


const Education = () => {
    const education = useAppSelector((state) => state.education)

    return (
        <div>
            <SectionWiseHeader title="Education Details" tabName="education" />
            <Spacer y={2} />
            {
                education.educations.map((edu, index) => {
                    return (
                        <>
                            <Table>
                                <TableHeader>
                                    <TableColumn>Education {index + 1}</TableColumn>
                                    <TableColumn>{""}</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>School Name</TableCell>
                                        <TableCell>{edu.school_name || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Major</TableCell>
                                        <TableCell>{edu.major || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Degree Type</TableCell>
                                        <TableCell>{edu.degree_type || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>{edu.start_date || "-"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>End Date</TableCell>
                                        <TableCell>{edu.end_date || "-"}</TableCell>
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

export default Education