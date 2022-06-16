import { createContext, useState } from "react";


export const  AuthContext = createContext();
export const AuthProviderWrapper = ({children})=>{
    const [auth,setAuth] = useState(false);
    const handleauth = ()=>{
        setAuth(!auth);
    }
    return <AuthContext.Provider value={{auth,handleauth}}>{children}</AuthContext.Provider>
}