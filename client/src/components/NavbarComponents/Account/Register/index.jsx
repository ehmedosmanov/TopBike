import React, { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalContext'
import {
  useAuthRegisterMutation,
  useLoginMutation
} from '../../../../features/auth/authApiSlice'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { authSuccess } from '../../../../features/auth/authSlice'
const Register = () => {
  const { handleToggleComponent, setIsOpen } = useContext(GlobalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()
  const [
    authRegister,
    { isLoading: isRegisterLoading, isError: registerError }
  ] = useAuthRegisterMutation()

  const handleRegister = async userData => {
    const res = await authRegister(userData)
    if (!authRegister.error) {
      dispatch(authSuccess(res.data))
      setIsOpen(false)
      navigate('/')
    }
  }

  const onSubmit = data => {
    handleRegister(data)
    reset()
  }
  if (isRegisterLoading) {
    return <h1>...LOADING</h1>
  }
  return (
    <div className='sign-up text-black pt-8'>
      <h3 className='pb-4 text-xl text-center'>REGISTER</h3>
      <form
        id='register'
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='input-box'>
          <input
            {...register('username', {
              required: 'Username is required'
            })}
            type='text'
            placeholder='Username'
            className='w-full h-[50px] shadow-none  outline-none border-[#ccc] border bg-none focus:text-black focus:placeholder:text-black duration-300 px-2'
          />
        </div>
        <div className='input-box'>
          <input
            {...register('email', {
              required: 'Email is required'
            })}
            type='email'
            placeholder='Email address'
            className='w-full h-[50px] shadow-none  outline-none border-[#ccc] border bg-none focus:text-black focus:placeholder:text-black duration-300 px-2'
          />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Password'
            {...register('password', {
              required: 'Password is required',
              minLength: 6
            })}
            className='w-full h-[50px] shadow-none  outline-none border-[#ccc] border bg-none focus:text-black focus:placeholder:text-black duration-300 px-2'
          />
        </div>
        <button className='bg-black text-white py-3 text-xl hover:bg-primary duration-300'>
          Register
        </button>
      </form>
      <div className='py-3 bg-[#dedede] mt-4'>
        <p
          onClick={() => handleToggleComponent('login')}
          className='text-center pl-3 text-black hover:text-primary duration-300 cursor-pointer'>
          Back To Login
        </p>
      </div>
    </div>
  )
}

export default Register
