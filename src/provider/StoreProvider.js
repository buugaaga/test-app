import React, { createContext, useContext } from 'react'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider>{children} </StoreContext.Provider>
  )
} 

export const useStore = () => {
  return useContext(StoreContext)
}