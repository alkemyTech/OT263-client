import React from "react";
import "bulma/css/bulma.min.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import Alert from "../Alert/Alert";

function DeleteButton({ id, onDelete }) {

    const emitDeleteAlert = async () => {
        const result = await Alert.question()
        .confirm()
        .deny()
        .fire("¿Estás seguro de querer eliminar este elemento?");
        if (result === false) {
            await Alert.error().timer().center().fire("Operación Rechazada");
        } else if (result === true) {
            handleConfirm(id);
        }
    };

    const handleConfirm = async (id) => {
        try {
            await onDelete()
            Alert.success().timer().center().fire("Eliminado con éxito");
        } catch (error) {
            Alert.error().timer().center().fire("Operación Fallida");
        }
    };
    
    return (
        <button
            className="button is-danger is-inverted is-rounded"
            onClick={emitDeleteAlert}
        >
            <span className="icon">
                <RiDeleteBack2Fill size="2em" />
            </span>
        </button>
    );
}

export default DeleteButton;
