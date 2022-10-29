type Props = {
  onClick: () => void
}

export const HamburgerMenu = ({ onClick }: Props) => {
  return (
    <button
      className='relative h-6 w-8 cursor-pointer border-y-2 
    border-primary-500 after:absolute after:-top-1/4 
    after:-left-1/4
    after:block after:h-[150%] after:w-[150%] lg:hidden 
    lg:border-hidden lg:bg-transparent lg:outline-none'
      onClick={onClick}
    >
      <div
        className='top-1/2 -mt-0.5 border-t-2 
      border-primary-500 before:top-px after:-top-2
      after:before:pointer-events-none after:before:absolute after:before:block 
      after:before:h-0.5 after:before:w-full after:before:bg-white after:before:text-white'
      ></div>
    </button>
  )
}
