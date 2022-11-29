import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const UserAuthentication = () => {

  const method = '/login' 

  return (
    <div className='mx-auto w-[100%] h-[80vh] mflex justify-center items-center p-9 '>
      <div className='h-[100%] w-[100%] bg-red-200'>
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
