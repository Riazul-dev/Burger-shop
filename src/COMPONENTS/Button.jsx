import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, path}) => {
  return (
    <>
      <Link className='bg-[#ff634e] text-xl font-semibold text-white px-4 py-2 rounded hover:bg-[#F8AFA6] duration-300 hover:text-slate-800 hover:ring-2 ring-[#ff634e]' to={path}><button type='button'>{text}</button></Link>
    </>
  )
}

export default Button
