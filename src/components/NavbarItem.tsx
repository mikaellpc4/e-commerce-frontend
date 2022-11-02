import React from 'react'
import { Link } from 'react-router-dom'
import { Trigger, List, Item, Content } from '@radix-ui/react-navigation-menu'

interface Item {
  itemName: string,
}

interface ITriggerItem {
  triggerName: string,
  triggerUrl: string,
  triggerContent: Item[]
}

const ListItemDesktop = ({ triggers }: { triggers: ITriggerItem[] }) => {
  return (
    <List className='hidden lg:flex justify-between items-center gap-10 mr-15'>
      {triggers.map((trigger, index) => {
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
    </List>
  )
}

export default ListItemDesktop
