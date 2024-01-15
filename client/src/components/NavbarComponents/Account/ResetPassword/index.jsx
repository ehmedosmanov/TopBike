import React, { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalContext'

const ResetPassword = () => {
  const { handleToggleComponent } = useContext(GlobalContext)

  return (
    <div className='sign-up text-black pt-8'>
      <h3 className='pb-4 text-xl text-center'>RESET YOUR PASSWORD</h3>
      <form id='register' className='flex flex-col gap-4'>
        <div className='input-box'>
          <input
            type='email'
            placeholder='Email address'
            className='w-full h-[50px] shadow-none  outline-none border-[#ccc] border bg-none focus:text-black focus:placeholder:text-black duration-300 px-2'
          />
        </div>
        <button className='bg-black text-white py-3 text-xl hover:bg-primary duration-300'>
          SUBMIT
        </button>
      </form>
      <div className='py-3 bg-[#dedede] mt-4'>
        <p
          onClick={() => handleToggleComponent('login')}
          className='text-center pl-3 text-[#000] hover:text-primary duration-300 cursor-pointer'>
          Cancel
        </p>
      </div>
    </div>
  )
}

export default ResetPassword
