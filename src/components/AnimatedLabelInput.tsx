import React, { useState } from 'react'

interface Props {
  inputs: {
    name: string,
    type: string
  }[]
}

const AnimatedLabelInput = ({ inputs }: Props) => {

  //  const [fieldsValues, setFieldsValues] = useState<T,U>(id:T,name:U) ({
  //    initial: '',
  //  })

  /* const [isActive, setIsActive] = useState<boolean[]>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.parentElement?.id
    const { value } = e.target
    setFieldsValues(...fieldsValues, [field]: value)
  } */

  {/* return (
    <div className='relative block w-[100%]'>
      {inputs.map((input) => {
        return (
          <div key={input.name} id={input.name} className='relative block'>
            <span className='absolute'> {input.name} </span>
            <input onChange={handleChange} type={input.type} />
          </div>
        )
      })}
    </div>
  )*/}
  return null;
}
export default AnimatedLabelInput
