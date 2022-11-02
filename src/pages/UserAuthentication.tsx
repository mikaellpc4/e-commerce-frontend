import { useLocation } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const UserAuthentication = () => {

  const fullUrl = useLocation()
  let method = fullUrl.pathname.slice(fullUrl.pathname.lastIndexOf("/"), fullUrl.pathname.length)

  return (
  <div className='mx-auto w-[50vw] h-[80vh] mflex justify-center items-center p-9'>
      <div className='h-[100%]'>
        {
          method === '/login'
            ? <LoginForm />
            : <RegisterForm />
        }
      </div>
    </div>
  )
}

export default UserAuthentication
