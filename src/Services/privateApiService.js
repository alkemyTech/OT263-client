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
  await axios
    .post('http://localhost:3001/users/auth/register', newUser)
    .then(res => {return res.data})
    .catch(error => {return error})
}

export const PostLogin = (user) => {
  axios
    .post('http://localhost:3001/users/auth/login', user)
    .then(res => {return res})
    .catch(error => {return error})
}

export default Get
