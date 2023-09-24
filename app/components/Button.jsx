"use client"
import React from 'react'
import { useState } from 'react'
const Button = ({children}) => {
  const [active,SetActive] = useState(false)
  return (
    
    <button onClick={()=>{SetActive(!active)}} className={`w-28 h-12  rounded-full border border-neutral-500 ${active ? 'bg-transparent':'bg-neutral-100 text-black'}`}>
        {children}
    </button>
  )
}

export default Button