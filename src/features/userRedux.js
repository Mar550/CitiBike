import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serverCalls from "./serverCalls";
import { connect } from "react-redux";

const user = JSON.parse(localStorage.getItem('user'))

  const initialState = {
    user : user ? user : null,
    loggedIn: false,
    isFetching: false,
    error: false,
    message:''
  }

  // Register User

  export const register = createAsyncThunk('auth/register',
    async (user, thunkAPI) => {
      try {
        return serverCalls.register(user)
      }
        catch(error) {
          const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message 
            || error.toString()
          return thunkAPI.rejectWithValue(message)
      }
    }
  )


  // Login User

  export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
      return await serverCalls.login(user)
    } catch(error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })

  // Logout User
  export const logout = createAsyncThunk('auth/logout', async () => {
    await serverCalls.logout()
  })


  export const userRedux = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      reset: (state) => {
        state.loggedIn = false
        state.isFetching = false
        state.error = false
        state.message = ''
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isFetching = true
        })
        .addCase(register.fulfilled, (state,action) => {
            state.isFetching = false
            state.loggedIn = true
            state.user = action.payload
            state.message = 'Registration successful'
            window.location.replace('/')
        })
        .addCase(register.rejected, (state,action) => {
            state.isFetching = false
            state.error = true
            state.message = action.payload
            state.user = null 
        })
        .addCase(login.pending, (state) => {
          state.isFetching = true
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isFetching = false
          state.loggedIn = true
          state.user = action.payload
          state.message = 'Login Success'
        })
        .addCase(login.rejected, (state, action) => {
          state.isFetching = false
          state.loggedIn = true
          state.message = action.payload
          state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
          state.user = null
          state.loggedIn = false
          state.error = false
          state.message = 'Logout Success'
        })
    }
  })

export const {reset} = userRedux.actions
export default userRedux.reducer


// OTHER PART
/** 
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: user ? user : null,
    loggedIn: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.loggedIn = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("token");
      state.loggedIn = false;
    },
    registerPending: (state, action) => {
      state.isFetching = true
    },
    registerFulfilled: (state, action) => {
      state.isFetching = false
      state.loggedIn = true
      state.currentUser = action.payload
    },
    registerRejected: (state, action) => {
      state.isFetching = false
      state.error = true
      state.loggedIn = false
      state.currentUser = null
    },
  },
});



export const { loginStart, loginSuccess, loginFailure, registerPending, registerFulfilled, registerRejected, logoutSuccess } = userSlice.actions;
export const selectUser = (state) => state.user.currentUser;
export default userSlice.reducer;

*/