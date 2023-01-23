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

        return()=>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('ofline', handleOfline)
        }
    },[])

    return isOnline;
}

export default useOnline;