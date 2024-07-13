import { DateValue } from "@nextui-org/react";


export const formatDate = (date: DateValue):string => {
    const dateStr = date.toString();
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const [year, month, day] = dateStr.split('-').map(Number);
    const monthName = months[month - 1];
    return `${monthName} ${year}`;
}