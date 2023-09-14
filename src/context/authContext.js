import { createContext, useEffect, useState } from "react";
import newRequest from "../utlis/newRequest";

export const AuthContext =  createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    
    const login = async (inputs) => {
        const res = await newRequest.post("/auth/login", inputs);
        setCurrentUser(res.data);
    }

    const logout = async () => {
        try{
            await newRequest.post("/auth/logout");
            setCurrentUser(null);
            localStorage.setItem("gun", null);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
