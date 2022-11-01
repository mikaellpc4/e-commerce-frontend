import { Link } from 'react-router-dom'
import { BiCart, BiUserCircle } from 'react-icons/bi'
import { Root, Trigger, List, Item, Content } from '@radix-ui/react-navigation-menu'
import { useState } from 'react'
import Logo from '../assets/images/logo.png'


export const Navbar = () => {

  interface Item {
    itemName: string,
  }

  interface ITriggerItem {
    triggerName: string,
    triggerUrl: string,
    triggerContent: Item[]
  }

  interface IProps {
    triggers: ITriggerItem[]
  }

  const ListItem = ({ triggers }: IProps) => {
    return (
      <>
        {triggers.map((trigger,index) => {
          return (
            <Item key={index} className='relative w-32 font-bold text-xl flex justify-center' >
              <span className='
                after:absolute 
                after:bg-cyan-300 
                after:h-[3px] 
                after:w-0 
                after:left-[-20%]
                hover:after:w-[140%] 
                after:bottom-[-11%]
                after:transition-all 
                after:duration-300 
            '>
                <Trigger className='h-16'>
                  <Link className='flex' to={trigger.triggerUrl}>
                    <span> {trigger.triggerName} </span>
                  </Link>
                </Trigger>
                <Content className='
                  absolute 
                  flex 
                  flex-col 
                  break-words
                  font-medium
                  bg-yellow-300 
                  px-4
                  py-2
                  w-[140%]
                  left-[-20%] 
                  z-10 
                  top-[115%] 
                  animate-drop
                  rounded
                  shadow-yellow-500
                  shadow
                '>
                  {trigger.triggerContent.map((item) => {
                    const itemNormalized = item.itemName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    const itemUrl = `${trigger.triggerUrl}-${itemNormalized}`
                    return (
                      <Link key={`${item.itemName}`} className='py-1.5 hover:-translate-y-[4%] transition duration-150' to={itemUrl}>
                        {item.itemName}
                      </Link>
                    )
                  })}
                </Content>
              </span>
            </Item >
          )
        })}
      </>
    )
  }

  const masculino = {
    triggerName: 'Masculino', triggerUrl: 'products/masculino',
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
    triggerUrl: 'products/feminino',
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

  const [triggers, setTriggers] = useState<ITriggerItem[]>([masculino, feminino])


  return (
    <Root className='h-20 flex justify-between items-center pr-8 py-2 bg-yellow-400 shadow-2xl rounded-lg m-3'>
      <Link className='flex items-center' to="/" >
        <img src={Logo} width='120' />
        <span className='text-2xl font-bold'> Banana Store </span>
      </Link>
      <List className='hidden lg:flex justify-between items-center gap-10 mr-15'>
        <ListItem triggers={triggers} />
      </List>
      <List className='hidden lg:flex justify-between items-center gap-3'>
        <Link to="/cart"><BiUserCircle size={40} /></Link>
        <Link to="/cart"><BiCart size={40} /></Link>
      </List>
    </Root>

  )
}
// ADICIONAR DEPOIS
{/* <header className='h-24 flex justify-between items-center px-8 py-2 bg-yellow-300 shadow-2xl rounded-lg m-3'>
      <Link className='flex items-center gap-3' to="/" >
        <span className='font-bold justify-between text-3xl'> Banana Store </span>
      </Link>
      <ul className='hidden lg:flex justify-between items-center gap-10 mr-15'>
        <li className='font-bold text-xl'><Link to="/products"> Masculino </Link></li>
        <li className='font-bold text-xl'><Link to="/products"> Feminino </Link></li>
        <li className='font-bold text-xl'><Link to="/products"> Calçados </Link></li>
        <li className='font-bold text-xl'><Link to="/products"> Casacos </Link></li>
        <li className='font-bold text-xl'><Link to="/products"> Moletons </Link></li>
      </ul>
      <ul className='hidden lg:flex justify-between items-center gap-3'>
        <li className='ml-3'><Link to="/cart"><BiUserCircle size={40} /></Link></li>
        <li className='ml-3'><Link to="/cart"><BiCart size={40} /></Link></li>
      </ul>
      <div className='lg:hidden flex'>
        <MdOutlineMenu size={40} />
        <div className='fixed w-[30%] min-w-[280px] top-24 right-0 px-3 py-4 rounded-lg'>
          <div className='bg-yellow-300 rounded-lg p-7'>
            <ul className='flex flex-col justify-between gap-2 text-center'>
              <li className='font-bold text-2xl'><Link to="/products"> Masculino </Link></li>
              <li className='font-bold text-2xl'><Link to="/products"> Feminino </Link></li>
              <li className='font-bold text-2xl'><Link to="/products"> Calçados </Link></li>
              <li className='font-bold text-2xl'><Link to="/products"> Casacos </Link></li>
              <li className='font-bold text-2xl'><Link to="/products"> Moletons </Link></li>
            </ul>
            <ul className='flex flex-row justify-center gap-3'>
              <li className='ml-3'><Link to="/cart"><BiUserCircle size={40} /></Link></li>
              <li className='ml-3'><Link to="/cart"><BiCart size={40} /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header> */}
