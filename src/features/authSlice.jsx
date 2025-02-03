import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
    registerSuccess:(state,{payload})=>{
      console.log("Baklava güzelmiş")
      console.log(payload)

    }
  },
});

export const {
  fetchStart,
  fetchFail,registerSuccess
} = authSlice.actions;
export default authSlice.reducer;
