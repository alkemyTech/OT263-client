import axios from 'axios'


const axiosBaseUrl= axios.create({
	baseURL:'http://localhost:3001'
})

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



