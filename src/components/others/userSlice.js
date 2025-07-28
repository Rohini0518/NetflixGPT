import  { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";  



export const getUsers=createAsyncThunk("users/getUsers",async ()=>{
    const response= await axios.get('https://reqres.in/api/users ')
    return response.data.data;
})

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await axios.post("https://reqres.in/api/users", user);
  return response.data;
});





const userSlice=createSlice({
    name: 'user',
    initialState:{
        users:[],
        error:null,
        status:'idle'
    },
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(getUsers.pending,(state)=>{
            state.status='loading';
        })
    builder.addCase(getUsers.fulfilled,(state,action)=>{
        state.users=action.payload;
                    state.status='success';
        state.error=null; 
    })
    builder.addCase(getUsers.rejected,(state,action)=>{
        state.status='failed';
        state.error=action.error.message;
    })


        builder.addCase(addUser.pending,(state)=>{
                        state.status='loading';

        })
        builder.addCase(addUser.fulfilled,(state, action)=>{
                        state.status='success';

            // state will have all initial vales access
            // action means the returned value from the addUser function
            //action.payload will have the data returned from the API
            state.users.push(action.payload)
        })
        builder.addCase(addUser.rejected,(state,action)=>{
            state.status='failed';
        state.error=action.error.message;
        })
    }
})

export default userSlice.reducer;