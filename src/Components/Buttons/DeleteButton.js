import React from 'react'
import 'bulma/css/bulma.min.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import Alert from '../Alert/Alert'

function DeleteButton({ id, handleDelete }) {
  const emitDeleteAlert = async () => {
    const result = await Alert.question()
      .confirm()
      .deny()
      .fire('¿Estás seguro de querer eliminar este elemento?')

    if (result === false) {
      await Alert.error().timer().center().fire('Operación Rechazada')
    } else if (result === true) {
      handleConfirm(id)
    }
  }

  const handleConfirm = async id => {
    try {
      await handleDelete()
      Alert.success().timer().center().fire('Eliminado con éxito')
    } catch (error) {
      Alert.error().timer().center().fire('Operación Fallida')
    }
  }

    return <RiDeleteBin5Fill color='red' cursor='pointer' onClick={emitDeleteAlert} style={{fontSize: '1.5rem'}} />
}

export default DeleteButton
