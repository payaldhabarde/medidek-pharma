
import React, { createContext, useContext, useState } from 'react'

   const Authcontext = createContext();
const Usercontext = ({children}) => {

    const [token,settoken]=useState('payalji')

  return (
    <Authcontext.Provider value={{token,settoken}}>
        {children}
    </Authcontext.Provider>
  )
}

const useAuth =()=>useContext(Authcontext);
export {useAuth,Usercontext};
