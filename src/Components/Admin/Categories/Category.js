export default function Category({ category: { id, name, email } }) {
    return (
        <tr>
            <td>{id}</td>
            <th>{name}</th>
            <td>{email}</td>
        </tr>
    )
}