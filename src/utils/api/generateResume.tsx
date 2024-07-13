import { GenerateData } from '@/types/GenerateData';
import axios from 'axios';
import { blob } from 'stream/consumers';



export const GenerateResume = async (data: GenerateData): Promise<string> => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/generateResume`,
            { data },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/pdf',
                },
                responseType: 'blob'
            }
        )
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob)
        return url
    } catch (error: any) {
        throw new Error(error.message)
    }
}