import { MdEdit } from 'react-icons/md';
import DeleteButton from '../../Buttons/DeleteButton';

const TableTemplate =({ data, handleDelete})=> {
        return(
        <table className="table is-bordered is-hoverable has-text-centered">
            <thead>
                <tr>
                    {Object.getOwnPropertyNames(data[0]).map(i => (<th key={i}>{i}</th>))}
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {data.map((i, index) => (
                    <tr key={index}>{
                        Object.entries(i).map((i, index) => (
                        <td key={index}>
                            {(i[0]=='image') 
                                ? <img width={320} src={i[1]}/>
                                : i[1]
                                }
                        </td>
                ))}
                        <td><MdEdit/></td>
                            <td key={index}>
                                <DeleteButton handleDelete={() => handleDelete(i.id)}/>
                            </td>
                    </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default TableTemplate;