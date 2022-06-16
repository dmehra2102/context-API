import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Users() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
      axios.get("https://reqres.in/api/users")
      .then((data)=> setUsers(data.data.data));
    }, [])
    
  return (
    <UsersBox>
        {
            users.map((item)=>{
                return (
                    <div key={item.last_name}>
                        <img src={item.avatar} alt={item.id} />
                        <p style={{"fontSize":"20px"}}>{item.first_name}</p>
                    </div>
                )
            })
        }
    </UsersBox>
  )
}
const UsersBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3,250px);
    grid-template-rows: auto;
    gap: 10px;
    margin: auto;
    width: 60%;
    margin-top: 20px;
`
export default Users