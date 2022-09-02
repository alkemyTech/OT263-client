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

export const getUsers = async () => {
	try{
    const users= await axios.get('https://jsonplaceholder.typicode.com/users', config)	
    return users.data	
	}catch(err){
		return err
	}

}

export const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3001/users/${id}`).then((res) => {
    return res.status
  }).catch(err => {
    return err
  })
}


export default Get
