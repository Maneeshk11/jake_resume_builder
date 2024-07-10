import { setActiveTab } from "@/lib/features/navigation/navigationSlice"
import { useAppDispatch } from "@/lib/hooks"
import { Button } from "@nextui-org/react"
import { FC } from "react"
import { FaRegEdit } from "react-icons/fa"

interface SectionWiseHeaderProps {
    title: string
    tabName: string
}

const SectionWiseHeader: FC<SectionWiseHeaderProps> = ({ title, tabName }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between items-center">
            <span className="font-medium ml-2">{title}</span>
            <Button variant="light" startContent={<FaRegEdit size={18} />}
                onClick={() => { dispatch(setActiveTab(tabName)) }} >
                Edit
            </Button>
        </div>
    )
}

export default SectionWiseHeader