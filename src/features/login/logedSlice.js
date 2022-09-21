import { createSlice } from "@reduxjs/toolkit";
import { get } from "../../Services/publicApiService";
import { post } from "../../Services/publicApiService";


export const logedSlice= createSlice({
    name: 'loged',
    initialState:{},
    reducers:{
        createLogedUser: (state, action)=>{            
            state.value=action.payload
        },
        deleteLogedUser: state=>{
            state.value={}
        }        
    }
})

export const { createLogedUser, deleteLogedUser }= logedSlice.actions

export const login = user =>async dispatch => {    
    try{
        const {data:{token}} = await post('users/auth/login', user)
        
        const {data:newUser} = await get('users/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(createLogedUser({token, ...newUser}))
    }catch(err){
        console.log(err.message)
    }
}

export const selectLoges = state=> state.loged.value

export default logedSlice.reducer