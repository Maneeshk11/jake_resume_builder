import SectionWiseHeader from "@/components/section-wize-header";
import { useAppSelector } from "@/lib/hooks"
import { Spacer, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const Personal = () => {
    const personalDetails = useAppSelector((state) => state.personal)
    return (
        <div>
            <SectionWiseHeader title="Personal Details" tabName="personal" />
            <Spacer y={2} />
            <Table>
                <TableHeader>
                    <TableColumn>Personal Details</TableColumn>
                    <TableColumn>{""}</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>{personalDetails.first_name || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Last Name</TableCell>
                        <TableCell>{personalDetails.last_name || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>{personalDetails.email || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>{personalDetails.phone_number || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Address</TableCell>
                        <TableCell>{personalDetails.address_line || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>City/Country</TableCell>
                        <TableCell>{personalDetails.country || "-"}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Personal