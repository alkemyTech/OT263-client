import axios from 'axios'

const config = {
	headers: {
		Group: 263 //Aqui va el ID del equipo!!
	}
}

const Get = () => {
	axios
		.get('https://jsonplaceholder.typicode.com/users', config)
		.then(res => console.log(res))
		.catch(err => console.log(err))
}

export const PostRegister = async (newUser) => {
  const user = await axios.post('http://localhost:3001/users/auth/register', newUser)
    .then(res => {return res})
    .catch(err => {return err})
    return user.data
}

export const PostLogin = async (data) => {
  const user = await axios.post('http://localhost:3001/users/auth/login', data)
    .then(res => {return res})
    .catch(err => {return err})
  return user.data
}

export default Get
