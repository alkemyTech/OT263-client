export default function Category({ category: { id, title, description } }) {
    return (
        <tr>
            <td>{id}</td>
            <th>{title}</th>
            <td>{description}</td>
        </tr>
    )
}