import React from 'react'

const Button = ({ children, backgroundColor, hoverColor, borderColor }) => {
  return (
    <>
      <button
        className={`${backgroundColor} text-white ${hoverColor} py-2 px-6 border border-solid border-${borderColor} duration-500`}>
        {children}
      </button>
    </>
  )
}

export default Button
