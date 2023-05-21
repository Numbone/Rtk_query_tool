import { PayloadAction,  createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import { fetchUsers } from "./ActionCreator";

interface UserState {
  users: IUser[] | null;
  isLoading: boolean;
  error: string;
  
}

const initialState: UserState = {
  isLoading: false,
  error: "",
  users: null,
 
};

 const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
        // userFetching(state){
        //   state.isLoading=true
        // },
        // userFetchingSuccess(state,action:PayloadAction<IUser[]>){
        //   state.isLoading=false
        //   state.error=""
        //   state.users=action.payload
        // },
        // userFetchingError(state,action:PayloadAction<string>){
        //   state.isLoading=false;
        //   state.error=action.payload
        // },
  },
  extraReducers:{
    [fetchUsers.fulfilled.type]:(state,action:PayloadAction<IUser[]>)=>{
      state.isLoading=false
      state.error=""
      state.users=action.payload
    },
    [fetchUsers.rejected.type]:(state,action:PayloadAction<string>)=>{
      state.isLoading=false;
      state.error=action.payload
    },
    [fetchUsers.pending.type]:(state)=>{
      state.isLoading=true
    }
  }
});
 

export default userSlice
