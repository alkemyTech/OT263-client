import axios from 'axios'

const config = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`
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

export const getUsers = async () => {
	try{
    const users= await axios.get('http://localhost:3001/users', config)	
    return users.data	
	}catch(err){
		return err
	}
}

export const deleteRequest = async (endpoint, id) => {
 return axios.delete(`http://localhost:3001/${endpoint}/${id}`, config)
}


export default Get
