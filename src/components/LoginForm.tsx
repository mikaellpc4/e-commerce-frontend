import React from 'react'
import AnimatedLabelInput from './AnimatedLabelInput'

const loginInputs = [
  {
    name: 'Email',
    type: 'Email'
  },
  {
    name: 'Password',
    type: 'Password'
  },
]

const LoginForm = () => {
  return (
    <div>
      <AnimatedLabelInput inputs={loginInputs} />
    </div>
  )
}

export default LoginForm
