/* eslint-disable @next/next/no-img-element */
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlinePlusCircle,
} from 'react-icons/ai'

const Header: React.FC = () => { 
  return (
    <div className='sticky top-0 border-b shadow-sm bg-white z-30'>
      <div className='flex justify-between h-24 items-center mx-4'>
        {/* left */}
        <div className='w-24 hidden lg:block cursor-pointer'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png'
            alt='instagram-logo'
          />
        </div>
        <div className='w-10 lg:hidden cursor-pointer'>
          <img
            src='https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png'
            alt='instagram-logo'
          />
        </div>
        {/* Search bar */}
        <div className='flex justify-center items-center border rounded-lg p-1'>
          <AiOutlineSearch className='mr-2  text-gray-500' />
          <input
            type='text'
            placeholder='Search'
            className='focus:outline-none'
          />
        </div>

        {/* right */}
        <div className='flex items-center space-x-4 cursor-pointer'>
          <AiOutlineHome
            size={24}
            className='hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex'
          />
          <AiOutlinePlusCircle
            size={24}
            className='hover:scale-125 transition-transform duration-200 ease-out hidden sm:inline-flex'
          />
          <img
            src='https://yt3.googleusercontent.com/ytc/AOPolaSZDA_-W-C-dpVo4BtwlIBmTIEti1UcNqS8g9F7oQ=s900-c-k-c0x00ffffff-no-rj'
            alt='img'
            className='h-10 rounded-full hidden sm:inline-flex'
          />
        </div>
      </div>
    </div>
  )
}
export default Header
