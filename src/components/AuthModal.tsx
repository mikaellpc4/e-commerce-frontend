import React from 'react'
import Arrow from '@radix-ui/'
import { Link } from 'react-router-dom'

const ProfileModal = ({ open }: { open: boolean }) => {
  if (!open) return null
  return (
    <div className='hidden lg:flex absolute right-12 top-9 w-64 pt-5 z-50 animate-drop'>
      <div className='bg-yellow-300 rounded text-left px-4 py-5 flex flex-col gap-5'>
        <div className='absolute top-[5%] left-[86.5%] bg-yellow-300 w-5 h-5 rotate-45'></div>
        <p> Para ver seus pedidos e ter uma experiência personalizada, acesse sua conta :)  </p>
        <Link to='/user/login' className='text-center bg-cyan-500 hover:bg-sky-400 rounded text-xl p-2'> Logar </Link>
        <Link to='/user/register' className='text-center border border-cyan-500 rounded text-xl p-2 mb-4'> Cadastrar </Link>
      </div>
    </div>
  )
}

export default ProfileModal
