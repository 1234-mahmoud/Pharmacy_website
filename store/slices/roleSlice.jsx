import { createSlice } from "@reduxjs/toolkit";

const init = {
    role:"Admin"
}

const roleSlice = createSlice({
    name:"role",
    initialState:init,
    reducers:{
        setRole:(state,action)=>{
            state.role=action.payload
        }
    }
})

export const {setRole} = roleSlice.actions;
export default roleSlice.reducer;