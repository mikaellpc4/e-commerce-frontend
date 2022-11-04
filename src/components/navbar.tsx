import { Link } from 'react-router-dom'
import { Root, List, Item } from '@radix-ui/react-navigation-menu'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import ProfileModal from './AuthModal'
import { BiUserCircle, BiCart, BiUser } from 'react-icons/bi'
import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai'
import { TbDiscount2 } from 'react-icons/tb'
import { IconType } from 'react-icons'

function getOffset(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.left + window.scrollX
}


export const Navbar = () => {

  const [openAuthModal, setOpenAuthModal] = useState<boolean>(true)
  const [activeItem, setActiveItem] = useState<string>()
  const [activeItemPosition, setActiveItemPosition] = useState<number>(-100)

  const handleActive = (e: React.SyntheticEvent) => {
    setActiveItem(e.currentTarget.id)
    const element = e.currentTarget
    const elementOffset = Math.round(getOffset(element) - 13)
    setActiveItemPosition(elementOffset)
  }

  interface option {
    icon: JSX.Element
    name: string,
    to: string
  }

  const navOptions: option[] = [
    {
      icon: <IoHomeOutline size={30} />,
      name: 'Inicio',
      to: '/'
    },
    {
      icon: <AiOutlineShopping size={30} />,
      name: 'Shop',
      to: '/catalog/new'
    },
    {
      icon: <TbDiscount2 size={30} />,
      name: 'Promoções',
      to: '/catalog/promo'
    },
  ]


  return (
    <Root className='h-20 flex justify-between items-center px-4 md:pr-7 bg-yellow-400 shadow-2xl rounded-lg m-3'>
      <Link className='flex items-center lg:ml-0 lg:mx-0 mx-auto' to="/" >
        <img src={Logo} className='w-24' />
        <span className='hidden sm:flex text-2xl font-bold -ml-3'> Banana Store </span>
      </Link>
      {/* desktop */}
      <List className='hidden lg:flex justify-between gap-10'>
        {navOptions.map((option) => {
          return (
            <Link key={option.name} to={option.to} className='flex items-center font-bold gap-1' >
              {option.icon}
              <span className={''}> {option.name} </span>
            </Link>
          )
        })}
      </List>
      <List className='hidden lg:flex gap-2'>
        <Item onMouseEnter={() => setOpenAuthModal(true)} onMouseLeave={() => setOpenAuthModal(false)} >
          <Link className='flex' to="/profile">
            <BiUserCircle className='flex' size={40} />
          </Link>
          <ProfileModal open={openAuthModal} />
        </Item>
        <Item>
          <Link to="/cart">
            <BiCart className='flex' size={40} />
          </Link>
        </Item>
      </List>
      {/* Mobile */}
      <div className='lg:hidden fixed bottom-4 left-0 w-[100%] h-[60px] px-3 block z-10'>
        <List className='flex justify-around items-center bg-yellow-300 h-14 font-bold p-4 rounded-lg'>
          {navOptions.map((option) => {
            return (
              <Link key={`mobile ${option.name}`} id={option.name} onClick={handleActive} className='navbarLink' to={option.to}>
                <span className={`navbarLinkIcon ${activeItem === option.name ? 'active' : ''}`}>
                  {option.icon}
                </span>
                <span className={`navbarLinkSpan ${activeItem === option.name ? 'active' : ''}`}> {option.name} </span>
              </Link>
            )
          })}
          <Link key={`mobile carrinho`} id='carrinho' onClick={handleActive} className='navbarLink' to={'/cart'}>
            <span className={`navbarLinkIcon ${activeItem === 'carrinho' ? 'active' : ''}`}>
              <AiOutlineShoppingCart size={30} />
            </span>
            <span className={`navbarLinkSpan ${activeItem === 'carrinho' ? 'active' : ''}`}> Carrinho </span>
          </Link>
          <Link key={`mobile perfil`} id='perfil' onClick={handleActive} className='navbarLink' to={'/profile'}>
            <span className={`navbarLinkIcon ${activeItem === 'perfil' ? 'active' : ''}`}>
              <BiUserCircle size={30} />
            </span>
            <span className={`navbarLinkSpan ${activeItem === 'perfil' ? 'active' : ''}`}> Carrinho </span>
          </Link>
          <div style={{ transform: `translateX(${activeItemPosition}px)` }} className={`fixed w-14 h-14 rounded-full bottom-[55px] left-0 transition duration-300 bg-green-300 border-4 border-white`}></div>
        </List>
      </div>
    </Root >
  )
}
