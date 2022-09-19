import { createSlice } from "@reduxjs/toolkit";
import { get } from "immer/dist/internal";
import { post } from "../../Services/publicApiService";


export const logedSlice= createSlice({
    name: 'loged',
    initialState:{},
    reducers:{
        createLogedUser: (state, action)=>{
            state.value(
                state.value=action.payload
            )
        },
        deleteLogedUser: state=>{
            state.value={}
        },
        isAdmin: state=>{
            return state.value.role===1
        }
    }
})

export const { createLogedUser, deleteLogedUser}= logedSlice.actions

export const login = user =>async dispatch => {
    const token = await post('users/auth/login', user)    
    const user = await get('users/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    dispatch(createLogedUser({token, ...user}))
}

export const selectLoges = state=> state.loged.value

export default logedSlice.reducer