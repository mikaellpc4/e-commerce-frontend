import Link from 'next/link'
import { Root } from '@radix-ui/react-navigation-menu'
import { BiUserCircle } from 'react-icons/bi'
import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai'
import { TbDiscount2 } from 'react-icons/tb'
import Image from 'next/image'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'


const Navbar = () => {

  const navOptions: Option[] = [
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

  const defaultOptions: Option[] = [
    {
      icon: <AiOutlineShoppingCart size={30} />,
      name: 'Carrinho',
      to: '/cart'
    },
    {
      icon: <BiUserCircle size={30} />,
      name: 'Perfil',
      to: '/catalog/promo'
    }
  ]

  return (
    <Root className='h-20 flex justify-between align-middle items-center px-4 md:pr-7 bg-yellow-400 shadow-2xl rounded-lg m-3'>
      <Link className='flex items-center lg:ml-0 lg:mx-0 mx-auto' href="/" >
        <Image src={'/banana.svg'} alt='banana logo' width={1280} height={1080} className='w-12 mr-4' />
        <span className='hidden sm:flex text-2xl font-bold -ml-3'> Banana Store </span>
      </Link>
      {/* desktop */}
      <DesktopNavbar navOptions={navOptions} />
      {/* Mobile */}
      <MobileNavbar options={[...navOptions, ...defaultOptions]} />
    </Root >
  )
}

export default Navbar
