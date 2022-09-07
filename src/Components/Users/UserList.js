import User from "./User"
import "./User.css"

function UserList({ users }) {

    return (
    <div className="container">
      <h1 className="title is-1" >Lista de usuarios</h1>
        <table className="table box media-center">
          <thead>
              <tr>
                  <th><abbr title="firstName">Nombre</abbr></th>
                  <th><abbr title="lastName">Apellido</abbr></th>
                  <th><abbr title="email">Email</abbr></th>
                  <th><abbr title="edit">Edit</abbr></th>
              </tr>
          </thead>
          <tbody>
              {users.map(user => <User key={user.id} user={user} />)}
          </tbody>
        </table>
    </div>
    )
}

export default UserList 