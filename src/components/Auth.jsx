import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from "react-router-dom";

function Auth({children}) {
    const {auth} = useContext(AuthContext);

    if(auth){
        return children
    }
    else{
        return <Navigate to={"/login"} replace={false}/>
    }
}

export default Auth