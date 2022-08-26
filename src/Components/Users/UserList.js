import User from "./User"

function UserList({ users }) {

    return (
        <div className="container column ">
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="Position">id</abbr></th>
                        <th><abbr title="Played">name</abbr></th>
                        <th><abbr title="Won">username</abbr></th>
                        <th><abbr title="Drawn">email</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <User ket={user.id} user={user} />)}
                </tbody>
            </table>
        </div>
    )
}

export default UserList