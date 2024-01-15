import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeComponent, setActiveComponent] = useState('login')

  const handleToggleComponent = component => {
    setActiveComponent(component)
  }

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  console.log(isOpen)

  const contextValue = {
    isActive,
    toggleIsActive,
    setIsActive,
    setActiveComponent,
    handleToggleComponent,
    activeComponent,
    toggleIsOpen,
    setIsOpen,
    isOpen
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}
