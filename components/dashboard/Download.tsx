'use client'
import { useEffect, useState } from "react"

const Download = ({ getUrl, path }: {getUrl: string, path: string}) => {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const downloadCV = (url: string) => {
        
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        // const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();

        if(mounted){
            const newA = document.createElement('a');
            newA.style.display = "hidden"
            newA.href = url;
            newA.target = "_blank"
            newA.download = "Applicant CV.pdf";

            document.body.appendChild(newA);
            newA.click();

            document.body.removeChild(newA)
        }
    }


    return (
        <>
        <span className="text-blue-900 cursor-pointer hover:underline" onClick={() => downloadCV(getUrl)}>{path.split("/")[1]}</span>
        </>
    )
}

export default Download