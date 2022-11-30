import { Item, List } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiCart, BiUserCircle } from 'react-icons/bi'
import ProfileModal from './AuthModal'

const DesktopNavbar = ({ navOptions }: { navOptions: Option[] }) => {

  const [openAuthModal, setOpenAuthModal] = useState<boolean>(true)

  return (
    <>
      <List className='hidden lg:flex justify-between gap-10'>
        {navOptions.map((option) => {
          return (
            <Link key={option.name} href={option.to} className='flex items-center font-bold gap-1' >
              {option.icon}
              <span className={''}> {option.name} </span>
            </Link>
          )
        })}
      </List>
      <List className='hidden lg:flex gap-2'>
        <Item onMouseEnter={() => setOpenAuthModal(true)} onMouseLeave={() => setOpenAuthModal(false)} >
          <Link className='flex' href="/profile">
            <BiUserCircle className='flex' size={40} />
          </Link>
          <ProfileModal open={openAuthModal} />
        </Item>
        <Item>
          <Link href="/cart">
            <BiCart className='flex' size={40} />
          </Link>
        </Item>
      </List>
    </>
  )
}

export default DesktopNavbar
