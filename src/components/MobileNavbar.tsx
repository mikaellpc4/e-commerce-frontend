import { List } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import React, { useState } from 'react'

interface MobileNavbarProps {
  options: {
    navOptions: Option[],
    defaultOptions: Option[]
  }
}

function getOffset(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.left + window.scrollY
}

const MobileNavbar = ({ options }: MobileNavbarProps) => {

  const [activeItem, setActiveItem] = useState<string>()
  const [activeItemPosition, setActiveItemPosition] = useState<number>(-100)

  const allOptions = [...options.navOptions, ...options.defaultOptions]

  const handleActive = (e: React.SyntheticEvent) => {
    setActiveItem(e.currentTarget.id)
    const element = e.currentTarget
    const elementOffset = Math.round(getOffset(element) - 13)
    setActiveItemPosition(elementOffset)
  }

  return (
    <div className='lg:hidden fixed bottom-4 left-0 w-[100%] h-[60px] px-3 block z-10'>
      <List className='flex justify-around items-center bg-yellow-300 h-14 font-bold p-4 rounded-lg'>
        {allOptions.map((option) => {
          return (
            <Link key={`mobile ${option.name}`} id={option.name} onClick={handleActive} className='navbarLink' href={option.to}>
              <span className={`navbarLinkIcon ${activeItem === option.name ? 'active' : ''}`}>
                {option.icon}
              </span>
              <span className={`navbarLinkSpan ${activeItem === option.name ? 'active' : ''}`}> {option.name} </span>
            </Link>
          )
        })}
        <div style={{ transform: `translateX(${activeItemPosition}px)` }} className={`fixed w-14 h-14 rounded-full bottom-[55px] left-0 transition duration-300 bg-green-300 border-4 border-white`}></div>
      </List>
    </div>
  )
}

export default MobileNavbar
