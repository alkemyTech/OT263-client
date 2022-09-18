import DeleteButton from "../../Buttons/DeleteButton";

export default function Category({ category: { id, name, email }, handleDelete }) {
    return (
        <tr>
            <td>{id}</td>
            <th>{name}</th>
            <td>{email}</td>
            <td><DeleteButton handleDelete={() => handleDelete(id)} /></td>
        </tr>
    )
}