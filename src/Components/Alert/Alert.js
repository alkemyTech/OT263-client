import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
/** Returns customizable alert */
/**
 * Example with Response (is async):
 *
 *		async function fire() {
 *			const result = await Alert.question().confirm().deny().cancel().fire('¿Confirmás la Operación?')
 *			if (result === false) Alert.error().timer().corner().fire('Operación Rechazada')
 *			else if (result === true) Alert.success().toast().center().fire('Operación Confirmada')
 *			else Alert.warning().toast().fire('Operación Cancelada')
 *		}
 *
 * Example without Response:
 *
 *		Alert.success().toast().fire('Creado con Exito')
 *
 *
 */
class Alert {
	static options = {
		position: 'center',
		backdrop: true,
		allowEscapeKey: true,
		allowOutsideClick: true,
		showCloseButton: true,
		showConfirmButton: false
	}

	static reset() {
		Object.keys(this.options).forEach(key => delete this.options[key])
		this.options.position = 'center'
		this.options.backdrop = false
		this.options.allowEscapeKey = true
		this.options.allowOutsideClick = true
		this.options.showCloseButton = true
		this.options.showConfirmButton = false
	}

	/** Displays the provided message */
	static message(text) {
		this.options.titleText = text
		return this
	}

	/** Displays Toast Alert with Timer */
	static toast() {
		this.options.showConfirmButton = false
		this.options.toast = true
		this.options.timer = 3000
		this.options.timerProgressBar = true
		this.options.position = 'top-end'
		this.options.didOpen = toast => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
		return this
	}

	/** Displays Success Icon */
	static success() {
		this.options.icon = 'success'
		return this
	}

	/** Displays Error Icon */
	static error() {
		this.options.icon = 'error'
		return this
	}

	/** Displays Info Icon */
	static info() {
		this.options.icon = 'info'
		return this
	}

	/** Displays Warning icon */
	static warning() {
		this.options.icon = 'warning'
		return this
	}

	/** Displays Question icon */
	static question() {
		this.options.icon = 'question'
		this.options.showConfirmButton = false
		return this
	}

	/** Sets a three seconds countdown and removes alert */
	static timer() {
		this.options.timer = 3000
		this.options.timerProgressBar = true
		this.options.didOpen = toast => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
		return this
	}

	/** Displays Alert at the Top-Right Corner */
	static corner() {
		this.options.position = 'top-end'
		return this
	}

	/** Centralizes Alert */
	static center() {
		this.options.position = 'center'
		return this
	}

	/** Shows Confirm Button */
	static confirm() {
		this.options.showConfirmButton = true
		this.options.confirmButtonText = 'Aceptar'
		return this
	}

	/** Shows Deny Button */
	static deny() {
		this.options.showDenyButton = true
		this.options.denyButtonText = 'Rechazar'
		this.options.reverseButtons = true
		return this
	}

	/** Shows Cancel Button */
	static cancel() {
		this.options.showCancelButton = true
		this.options.denyButtonText = 'Cancelar'
		this.options.reverseButtons = true
		return this
	}

	/** Fires the alert */
	/** @param {String} [text] text to display in the alert*/
	static async fire(text) {
		this.options.text = text

		const result = await MySwal.fire(this.options)
		this.reset()
		return result.value
	}

	static update() {
		return MySwal.update(this.options)
	}
}

export default Alert
