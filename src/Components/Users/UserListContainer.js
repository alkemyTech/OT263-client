import { useEffect, useState } from "react"
import { getUsers } from "../../Services/privateApiService"
import Loader from "../Loader/Loader"
import UserList from "./UserList"

function UserListContainer() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
          .then(result=>{
              setIsLoaded(true)
              setUsers(result)
              setIsLoaded(false)
          },
          (err)=>{
              setIsLoaded(true)                    
              setError(err)
              setIsLoaded(false)
          })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoaded) {
        return <Loader key="1" size="200" image="./images/Somos-Mas/LOGO-SomosMas.png"/>
    } else {
        return <UserList users={users.slice(0)}/>
    }
}

export default UserListContainer 