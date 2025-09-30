'use client'

import { useState } from "react";

export default function Counter({users}){
  const [count,setCount] = useState()

  return(
    <button onClick={()=>setCount((c)=>c+1)}>{count}</button>
  )
}