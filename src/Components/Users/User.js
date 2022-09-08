import {useNavigate} from "react-router-dom";
import { IoMdSync } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import "./User.css";
import { deleteUser } from "../../Services/privateApiService"


function User(user) {
  const {firstName, lastName, email, id} = user.user
  const navigate = useNavigate()

  return (
      <tr>
          <th>{firstName}</th>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>
            <div className='iconContainer'> 
              <IoMdSync
                color="#008000" 
                className='updateIcon' 
                onClick={ () => {/*navigate(`/Users/${id}/update`)*/} } //TODO
              />
              <RiDeleteBin6Line 
                color="#FF0000" 
                className='deleteIcon' 
                onClick={ () => {/*deleteUser(id)*/} } //TODO
              />
            </div>
          </td>
      </tr>
  )
}

export default User 