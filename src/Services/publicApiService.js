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

export const get=(endPoint, credentials)=>{
	try{
		return  axiosBaseUrl.get(endPoint, credentials)		
	}catch(err){		
		return err
	}
}

export const post=(endPoint, data)=>{
	try{
		return  axiosBaseUrl.post(endPoint, data)		
	}catch(err){		
		return err
	}
}


export default Get
