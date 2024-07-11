import SectionWiseHeader from "@/components/section-wize-header"
import { useAppSelector } from "@/lib/hooks"
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"


const RelevantCoursework = () => {
    const relevant_coursework = useAppSelector((state) => state.education.relevant_coursework)

    return (
        <div>
            <SectionWiseHeader title="Relevant Coursework" tabName="education" />
            <Spacer y={2} />
            <>
                <Table>
                    <TableHeader className="">
                        {/* <TableColumn width={"30%"}></TableColumn> */}
                        <TableColumn>{"Coursework"}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            relevant_coursework.map((course, _) => {
                                return (
                                    <TableRow>
                                        <TableCell>{course}</TableCell>
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

export default RelevantCoursework