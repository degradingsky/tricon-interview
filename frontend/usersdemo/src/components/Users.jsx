import React, { useEffect } from "react";

const Users = () => {
const [users, setUsers] = useState([]);
const [loaded, setLoaded] = useState(false);

useEffect(() => {
    const data = fetch('localhost:3000/users').then((res)=> res)
    setUsers(data)
    setLoaded(true)
}, [])


    return (
        <>
        {loaded  ? ( 
                users.map((user) => {
                    <li>{user.name}</li>
                })
        ) : 
        (<h1>LOading...</h1>)}
        </>
    )
}

export default React.memo(Users);