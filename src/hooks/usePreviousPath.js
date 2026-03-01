import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const usePreviousPath = () => {
    const location = useLocation();
    console.log("Current path:", location.pathname);
    useEffect(() => {
        // Store the current path in localStorage
        if (location.pathname !== "/login" && location.pathname !== "/signup") {
            sessionStorage.setItem("lastPath", location.pathname);
        }
    }, [location]);
}

export default usePreviousPath;