import {useEffect, useState} from "react";

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
            console.log("is mobile")
        } else {
            setIsMobile(false)
            console.log("is desktop")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])

    return isMobile;
}

export default useMobile;