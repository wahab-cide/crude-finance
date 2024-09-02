import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex-center size-full amx-sm:px-6'>
      <AuthForm  type='sign-up'/>
    </section>
  )
}

export default SignUp