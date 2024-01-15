import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../../../context/GlobalContext'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../../../features/auth/authApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authSuccess } from '../../../../features/auth/authSlice'

const Login = () => {
  const { handleToggleComponent, setIsOpen, setIsActive } =
    useContext(GlobalContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()
  const [loginMutation, { isLoading: isLoginLoading, isError: loginError }] =
    useLoginMutation()

  const handleLogin = async userData => {
    const res = await loginMutation(userData)
    console.log(userData)
    console.log(res)
    if (!loginMutation.error) {
      dispatch(authSuccess(res.data))
      setIsOpen(false)
      setIsActive(false)
      navigate('/')
    }
  }
  const onSubmit = data => {
    handleLogin(data)
    reset()
  }
  if (isLoginLoading) {
    return <h1>...LOADING</h1>
  }
  if (loginError) {
    return console.log(loginError)
  }
  return (
    <div className='sign-in text-black pt-8'>
      <h3 className='pb-4 text-xl text-center'>LOGIN</h3>
      <form
        id='register'
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='input-box'>
          <input
            {...register('username', {
              required: 'username is required'
            })}
            type='text'
            placeholder='username'
            className='w-full h-[50px] shadow-none  outline-none border-[#ccc] border bg-none focus:text-black focus:placeholder:text-black duration-300 px-2'
          />
        </div>
        <div className='input-box'>
          <input
            {...register('password', {
              required: 'password is required'
            })}
            type='password'
            placeholder='Password'
            className='w-full h-[50px] shadow-none  outline-none border-[#ccc] border bg-none focus:text-black focus:placeholder:text-black duration-300 px-2'
          />
        </div>
        <p
          onClick={() => handleToggleComponent('resetPassword')}
          className='cursor-pointer text-[#ccc] hover:text-primary duration-300 text-left'>
          Forgot your password?
        </p>
        <button className='bg-black text-white py-3 text-xl hover:bg-primary duration-300'>
          Log In
        </button>
      </form>
      <div className='py-3 bg-[#dedede] mt-4'>
        <p className='text-center font-semibold'>
          Don’t have an account?
          <span
            onClick={() => handleToggleComponent('register')}
            className='pl-3 text-[#c5c4c4] hover:text-primary duration-300 cursor-pointer'>
            Register now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
