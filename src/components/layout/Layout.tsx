import * as React from 'react'

import { Navbar } from '../Navbar/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer className='mt-4 flex h-[40px] items-center justify-center bg-primary-500 md:mt-8'>
        <p className='text-white'>@Copyright YourNews - gregoriusjimmy</p>
      </footer>
    </div>
  )
}
