import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    userData: null
  },
  reducers: {
    authSuccess: (state, action) => {
      state.token = action.payload.token
      state.userData = action.payload.userData
      localStorage.setItem('token', action.payload.token)
    },
    logout: state => {
      state.token = null
      state.userData = null
      localStorage.removeItem('token')
    }
  }
})

export const { authSuccess, logout } = authSlice.actions

export default authSlice.reducer
