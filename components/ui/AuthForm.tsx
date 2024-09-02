'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'


const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState(null)

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/favicon-color.svg"
            alt="Crude Logo"
            width={34}
            height={34}
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-gray-500">Crude</h1>
      </Link>
      <div className='flex flex-col gap-1 md:gap-3'>
        <h1 className='text-24 lg:text-36 font-semibold text-gray-500'>
            {user? 'Link Account' :
            type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        
            <p className='text-16 font-normal text-gray-500'>
                {user
                ? 'Link Your Account' : 'Enter Your Details'
                }
            </p>
        </h1>
      </div>
        </header>
        {user? (
            <div></div>
        ): <div></div>}
    </section>
  )
}

export default AuthForm