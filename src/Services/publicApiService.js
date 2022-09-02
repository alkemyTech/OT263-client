import axios from 'axios'

const config = {
	headers: {
		// Group: 01                //Aqui va el ID del equipo!!
	}
}

const axiosBaseUrl= axios.create({
	baseURL:'http://localhost:3001'
})

const Get = () => {
	axios
		.get('https://jsonplaceholder.typicode.com/users', config)
		.then(res => console.log(res))
		.catch(err => console.log(err))
}

const get=async (url)=>{
	try{
		return await axiosBaseUrl.get(endPoint)
	}catch(err){
		return {message:err.message}
	}
}

export default Get
