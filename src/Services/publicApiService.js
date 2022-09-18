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

export const get=endPoint=>{
	try{
		return  axiosBaseUrl.get(endPoint)		
	}catch(err){		
		return err
	}
}

export default Get
