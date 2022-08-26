function User({ user: { id, name, username, email } }) {
    return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
        </tr>
    )
}

export default User