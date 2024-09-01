'use client'
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Link } from 'lucide-react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
  

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
        <SheetTrigger><Image src="/icons/hamburger.svg" alt='menu' width={30} height={30} className='cursor-pointer'/></SheetTrigger>
        <SheetContent className='border-none bg-black'>
            <Link href='/'
                className='mb-12
                cursor-pointer
                flex 
                items-center
                gap-2'>
                    <Image 
                    src='/icons/favicon-color.svg'
                    alt='Crude Logo'
                    width={34}
                    height={34}
                    />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-gray-500'>Crude</h1>
                </Link>
                <div className='mobilenav-sheet'>
                    <SheetClose asChild>
                        <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map((item)=>{
                        const isActive = pathname === item.route || pathname.startsWith(`{item.route}/`)
                        return(
                            <SheetClose asChild key={item.route}>
                                <Link href={item.route} key={item.label}
                                    className={cn('mobilenav-sheet_close w-full', {'bg-gray-500': isActive})}>
                                        <Image src={item.imgURL} alt={item.label} width={20} height={20}
                                        className={cn({
                                            'brightness-[3] invert-[0]': isActive
                                        })}
                                        />
                                    <p className={cn('text-16 font-semibold text-gray-500',{'!text-white': isActive})}>{item.label}</p>
                                </Link>
                            </SheetClose>
                            )
                        })}
                        </nav>
                    </SheetClose>
                </div>
        </SheetContent>
    </Sheet>
  </section>
  )
}

export default MobileNav