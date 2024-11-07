import React from 'react'

function Footer() {
  return (
    <div className='h-[20vh] lg:h-[10vh] bg-slate-400 text-white flex justify-center items-center text-center'>
      <p>Copyright &copy; {new Date().getFullYear()} . All rights reserved || This Website is made with <span className='text-xl text-orange-300'>Riazul_Karim</span></p>
    </div>
  )
}

export default Footer
