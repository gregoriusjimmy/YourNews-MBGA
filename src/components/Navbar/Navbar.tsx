import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import clsxm from '@/lib/clsxm'

import { HamburgerMenu } from './HamburgerMenu'
import { NavItem } from './NavItem'
import UnstyledLink from '../links/UnstyledLink'

const CATEGORIES = [
  'Business',
  'Entertainment',
  'Health',
  'Science',
  'Sports',
  'Technology',
]

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const drawerRef = useRef<HTMLUListElement>(null)

  const router = useRouter()

  useEffect(() => {
    const closeDrawer = (event: any) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return
      }
      setOpenDrawer(false)
    }
    document.addEventListener('mousedown', closeDrawer)
    return () => document.removeEventListener('mousedown', closeDrawer)
  }, [])

  return (
    <nav
      className={clsxm('z-40 h-20 w-full flex-1 font-serif lg:h-28', [
        router.pathname !== '/' ? 'from-primary-500 to-primary-500' : '',
      ])}
    >
      <div className='layout m-auto flex h-full items-center justify-between'>
        <div className='flex h-full cursor-pointer items-center justify-center'>
          <UnstyledLink href='/'>
            <h2 className='font-bold text-primary-500'>YourNews</h2>
          </UnstyledLink>
        </div>
        {/* Hamburger Menu */}
        <HamburgerMenu onClick={() => setOpenDrawer(true)} />
        <ul
          ref={drawerRef}
          className={clsxm(
            'fixed right-0 top-0 z-50',
            'flex h-screen translate-x-full flex-col',
            'bg-primary-700 py-[20vh] px-8 font-bold text-white transition-transform lg:relative',
            'lg:top-auto lg:h-full lg:translate-x-0 lg:flex-row lg:bg-transparent lg:py-1 lg:px-1 lg:font-semibold',
            [openDrawer && 'translate-x-0']
          )}
        >
          {CATEGORIES.map((category) => (
            <NavItem key={category} href={`/${category.toLowerCase()}`}>
              <p
                className={clsxm('text-white lg:text-primary-500', [
                  category.toLowerCase() === router.query.category &&
                    'text-secondary-300 lg:text-secondary-500 ',
                ])}
              >
                {category}
              </p>
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  )
}
