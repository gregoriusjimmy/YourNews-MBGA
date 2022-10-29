import { ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

import UnstyledLink from '../links/UnstyledLink'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

export const NavItem = ({ children, href, className }: Props) => {
  return (
    <li
      className={clsxm(
        'py-6 text-sm lg:flex lg:cursor-pointer lg:items-center lg:pl-16 lg:text-base',
        className
      )}
    >
      <UnstyledLink href={href}>{children}</UnstyledLink>
    </li>
  )
}
