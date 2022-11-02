import { Link } from 'react-router-dom'
import { BiCart, BiUserCircle } from 'react-icons/bi'
import { MdOutlineMenu } from 'react-icons/md'
import { Root, List } from '@radix-ui/react-navigation-menu'
import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import ProfileModal from './AuthModal'
import ListItemDesktop from './NavbarItem'

const masculino = {
  triggerName: 'Masculino', triggerUrl: 'catalog/masculino',
  triggerContent: [
    {
      itemName: 'Camisas',
    },
    {
      itemName: 'Blusas',
    },
    {
      itemName: 'Shorts',
    },
    {
      itemName: 'Bermudas',
    },
    {
      itemName: 'Conjuntos',
    }
  ]
}

const feminino = {
  triggerName: 'Feminino',
  triggerUrl: 'catalog/feminino',
  triggerContent: [
    {
      itemName: 'Camisas',
    },
    {
      itemName: 'Blusas',
    },
    {
      itemName: 'Shorts',
    },
    {
      itemName: 'Biquinis',
    },
    {
      itemName: 'Maiô',
    },
    {
      itemName: 'Conjuntos',
    }
  ]
}


export const Navbar = () => {

  const [triggers, setTriggers] = useState<ITriggerItem[]>([masculino, feminino])
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(true)

  return (
    <Root className='h-20 flex justify-between items-center px-4 md:pr-7 bg-yellow-400 shadow-2xl rounded-lg m-3'>
      <MdOutlineMenu className='lg:hidden' size={30} />
      <Link className='flex items-center ml-[18%] sm:ml-[22%] lg:ml-0' to="/" >
        <img src={Logo} className='w-24' />
        <span className='hidden sm:flex text-2xl font-bold -ml-3'> Banana Store </span>
      </Link>
      <ListItemDesktop triggers={triggers} />
      <List onMouseEnter={() => setOpenAuthModal(true)} onMouseLeave={() => setOpenAuthModal(false)}
        className='
        flex 
        gap-2
        '>
        <Link className='flex' to="/profile">
          <BiUserCircle className='hidden sm:flex' size={40} />
          <BiUserCircle className='flex sm:hidden' size={35} />
        </Link>
        <ProfileModal open={openAuthModal} />
        <Link to="/cart">
          <BiCart className='hidden sm:flex' size={40} />
          <BiCart className='flex sm:hidden' size={35} />
        </Link>
      </List>
    </Root >
  )
}
