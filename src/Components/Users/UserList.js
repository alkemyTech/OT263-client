import User from "./User"
import "./User.css"

function UserList({ users }) {
    return (
        <div className="container">
            <h1 className="title is-1" >Lista de usuarios</h1>
            <table className="table box media-center">
                <thead>
                    <tr>
                        <th><abbr title="Position">id</abbr></th>
                        <th><abbr title="Played">name</abbr></th>
                        <th><abbr title="Won">username</abbr></th>
                        <th><abbr title="Drawn">email</abbr></th>
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