import { useEffect, useState } from "react"
import { getUsers } from "../../Services/privateApiService"
import Loader from "../Loader/Loader"
import UserList from "./UserList"

function UserListContainer() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().
        then(result=>{
            setUsers(result)
        },
        (err)=>{
            setIsLoaded(true)                    
            setError(err)
        }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loader/>
    } else {
        return (
            <UserList users={users.slice(0)}/>
        );
    }
}

export default UserListContainer