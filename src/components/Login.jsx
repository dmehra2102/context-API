import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import {useNavigate} from "react-router-dom";

function Login() {
    const {handleauth} = useContext(AuthContext);
    const [detail,setDetail] = useState({
        email: "eve.holt@reqres.in",
        password : "cityslicka"
    });

    const navigate = useNavigate();

    const handlechange = (e)=>{
        const {id,value} = e.target;

        setDetail({
            ...detail,
            [id] : value
        });
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        axios("https://reqres.in/api/login",{
            method : "POST",
            data : detail
        }).then((data)=> console.log(data.data.token))
        .then(()=> handleauth()).then(()=> navigate(-2 , {replace:true}))
        .catch((error)=> console.log(error));

    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="email" placeholder='email' onChange={handlechange} id="email" defaultValue={"eve.holt@reqres.in"}/><br />
            <input type="password" placeholder='password' onChange={handlechange} id="password" defaultValue={"cityslicka"}/><br />
            <input type="submit"  value={"submit"}/>
        </form>
    </div>
  )
}

export default Login