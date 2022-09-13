import React from "react";
import "bulma/css/bulma.min.css";
import { deleteRequest } from "../../Services/privateApiService";
import { RiDeleteBack2Fill } from "react-icons/ri";
import Alert from "../Alert/Alert";

function DeleteButton({ endpoint, id }) {
    // Example : <DeleteButton endpoint={'novedades'} id={id}/>
    
    const handleDelete = async (endpoint, id) => {
        try {
            await deleteRequest(endpoint, id);
            Alert.success().timer().center().fire("Eliminado con éxito");
        } catch (error) {
            Alert.error().timer().center().fire("Operación Fallida");
        }
    }

    const emitDeleteAlert = async () => {
        const result = await Alert.question()
            .confirm()
            .deny()
            .fire("¿Estás seguro de querer eliminar este elemento?");
        if (result === false) {
            Alert.error().timer().center().fire("Operación Rechazada");
        } else if (result === true) {
            handleDelete(endpoint, id);
        }
    };

    return (
        <button
            className="button is-danger is-inverted is-rounded"
            onClick={emitDeleteAlert}
        >
            <span className="icon">
                <RiDeleteBack2Fill size='2em'/>
            </span>
        </button>
    );
}

export default DeleteButton;
