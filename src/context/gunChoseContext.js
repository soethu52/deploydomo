import { createContext, useEffect, useState } from "react";

export const GunContext =  createContext();

export const GunContextProvider = ({ children }) => {
    const [currentGun, setCurrentGun] = useState(
        JSON.parse(localStorage.getItem("gun")) || null
    );

    const selectGun = (id) => {
        // To Do
        setCurrentGun({
            id:id,
        });
    }

    useEffect(()=>{
        localStorage.setItem("gun", JSON.stringify(currentGun));
    },[currentGun]);

    return (
        <GunContext.Provider value={{currentGun, selectGun}}>
            {children}
        </GunContext.Provider>
    )
}
