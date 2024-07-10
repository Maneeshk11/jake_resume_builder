import SectionWiseHeader from "@/components/section-wize-header"
import { useAppSelector } from "@/lib/hooks"
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const Links = () => {
    const links = useAppSelector((state) => state.links)

    return (
        <div>
            <SectionWiseHeader title="Links" tabName="links" />
            <Spacer y={2} />
            <Table>
                <TableHeader>
                    <TableColumn>Links</TableColumn>
                    <TableColumn>{""}</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>LinkedIn</TableCell>
                        <TableCell>{links.linkedin || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>GitHub</TableCell>
                        <TableCell>{links.github || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Portfolio</TableCell>
                        <TableCell>{links.portfolio || "-"}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Links