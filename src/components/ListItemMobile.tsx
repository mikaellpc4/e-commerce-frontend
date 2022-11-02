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
          <Item>
            {
              trigger.triggerContent.map((item) => {
                const itemNormalized = item.itemName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                const itemUrl = `${trigger.triggerUrl}-${itemNormalized}`
                return (
                  <Link key={`${item.itemName}`} className='py-1.5 hover:-translate-y-[4%] transition duration-150' to={itemUrl}>
                    {item.itemName}
                  </Link>
                )
              })
            }
          </Item>
        )
      })}
    </List>
  )
}

export default ListItemDesktop
