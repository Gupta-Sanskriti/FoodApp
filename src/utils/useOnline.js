import { useEffect, useState } from "react"

const useOnline = () =>{
    const [isOnline, setOnline] = useState(true);

    
    useEffect(()=>{
        const handleOnline = (()=>{
            setOnline(true)
        })
        const handleOfline = () =>{
            setOnline(false)
        }
        window.addEventListener('online',handleOnline )
        window.addEventListener('offline', handleOfline)
        console.log("isOnline")
        return()=>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('ofline', handleOfline)
        }
        
    },[isOnline])

    return isOnline;
}

export default useOnline;