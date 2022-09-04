import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const confirmationAlert = async () => {
	const result = await MySwal.fire({
		title: '¿Guardar los cambios?',
		showDenyButton: true,
		confirmButtonText: 'Guardar',
		denyButtonText: `Descartar`
	})

	if (result.isConfirmed) {
		await Swal.fire('¡Guardado!', '', 'success')
	} else if (result.isDenied) {
		await Swal.fire('Cambios no guardados', '', 'info')
	}

	return result.value
}

export const displayAlert = (success = true) => {
	Swal.fire({
		position: 'center',
		icon: success ? 'success' : 'error',
		title: success ? '¡Operación Exitosa!' : '¡Error en la operación!',
		showConfirmButton: false,
		timer: 1500
	})
}
