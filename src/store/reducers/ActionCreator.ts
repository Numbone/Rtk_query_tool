import axios from "axios";
import { AppDispatch } from "..";
import UserSlice from "./UserSlice";
import { IUser } from "../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers=()=>async(dispatch:AppDispatch)=>{
//     try {
//         dispatch(UserSlice.actions.userFetching())
//         const result= await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
//         dispatch(UserSlice.actions.userFetchingSuccess(result.data))
//     } catch (error:any) {
//         dispatch(UserSlice.actions.userFetchingError(error.message))
//     }
// }

export const fetchUsers=createAsyncThunk("user/fetchAll",async(_,thunkApi)=>{
    try {
        const result= await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        return JSON.stringify(result.data) 
    } catch (error:any) {
        return thunkApi.rejectWithValue(error.message)
    }
   
})