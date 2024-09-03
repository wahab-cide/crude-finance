'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'
 
 
const AuthForm = ({type}: {type: string}) => {
  const router = useRouter();
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
 

  const formSchema = authFormSchema(type);

      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      zipcode: ""
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Sign up with Appwrite & create plaid token
      
      if(type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address!,
          city: data.city!,
          state: data.state!,
          zipCode: data.zipcode!,
          email: data.email,
          password: data.password
        }

        const newUser = await signUp(userData);

        setUser(newUser);
      }

      if(type === 'sign-in') {
        //const response = await signIn({
        //  email: data.email,
        //  password: data.password,
        //})

        //if(response) router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }


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
            <div className='flex flex-col gap-4'>
              {/* Plaid Link */}
            </div>
        ): (
          <>
           <Form {...form}>
            {type === 'sign-up' && (
              <>
                <div className='flex gap-4'>
                  <CustomInput control={form.control}
                  name='firstName' label='First Name'
                  placeholder='First Name. ex: John'
                  />
                  <CustomInput control={form.control}
                  name='lastName' label='Last Name'
                  placeholder='Last Name. ex: Doe'
                  />
                </div>
                <CustomInput control={form.control}
                name='address' label='Address'
                placeholder='Enter Your Address'
                />
                 <CustomInput control={form.control}
                 name='city' label='City '
                 placeholder='Enter Your City'
                 />
                <div className='flex gap-4'>
                  <CustomInput control={form.control}
                  name='state' label='State '
                  placeholder='ex: MA'
                  />
                  <CustomInput control={form.control}
                  name='zipcode' label='Zip Code'
                  placeholder='ex: 01267'
                  />
                </div>   
              </>
            )}
           
              <>
                  <CustomInput control={form.control}
                  name='email' label='Email'
                  placeholder='Enter Your Email'
                  />  
                  <CustomInput control={form.control}
                  name='password' label='Password'
                  placeholder='Enter Your Password'
                  />    
              </>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className='flex flex-col gap-4'>
                  <Button type="submit"  disabled={isLoading} className='form-btn'>
                  {isLoading? (
                    <>
                      <Loader2  size={20}
                      className='animate-spin'/> &nbsp;
                      Loading...
                    </>
                  ): type ==='sign-in'
                  ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
              
            </form>
      </Form>
      <footer className='flex justify-center gap-1'>
        <p className='text-14 font-normal text-gray-500'>
          {
          type === 'sign-in'
          ? "Don't have an accunt?"
          : "Already have an account?"
          }
        </p>
        <Link href={type === 'sign-in'? '/sign-up'
          : '/sign-in'
        } className='form-link'>
          {type === 'sign-in'? 'Sign Up' : 'Sign In'}
        </Link>
      </footer>
          </>
        )}
    </section>
  )
}

export default AuthForm