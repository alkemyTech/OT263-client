import React from 'react';
import 'bulma/css/bulma.min.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Alert from '../Alert/Alert';

function DeleteButton({ handleDelete }) {
    const emitDeleteAlert = async () => {
        const result = await Alert.question()
            .confirm()
            .deny()
            .fire('¿Estás seguro de querer eliminar este elemento?');

        if (result === false) {
            await Alert.error().timer().center().fire('Operación Rechazada');
        } else if (result === true) {
            handleConfirm();
        }
    };

    const handleConfirm = async () => {
        try {
            await handleDelete();
            Alert.success().timer().center().fire('Eliminado con éxito');
        } catch (error) {
            Alert.error().timer().center().fire('Operación Fallida');
        }
    };

    return (
        <button className='button' onClick={emitDeleteAlert}>
            <span className='icon'>
                <RiDeleteBin5Fill size={22}/>
            </span>
        </button>
    );
}

export default DeleteButton;
