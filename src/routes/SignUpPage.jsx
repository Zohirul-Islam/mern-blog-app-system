import { SignIn } from "@clerk/clerk-react"


const SignUpPage = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignIn signUpUrl="/login"/>
    </div>
  )
}

export default SignUpPage