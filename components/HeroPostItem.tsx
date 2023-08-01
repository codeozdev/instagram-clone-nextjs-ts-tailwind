/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { BsThreeDots, BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineMessage, AiFillHeart } from 'react-icons/ai'
import { GoPaperAirplane } from 'react-icons/go'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

const HeroPostItem: React.FC = () => {
  return (
    <div>
      <div className='border my-7 bg-white rounded-md'>
        <div className='flex items-center p-5'>
          <img
            src='https://i.pravatar.cc/150?img=10'
            alt='img'
            className='h-12  rounded-full border p-1 mr-3'
          />
          <p className='flex-1 font-bold'>Adysed</p>
          <BsThreeDots />
        </div>
        {/* post image */}
        <Image
          src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80'
          alt='img'
          width={1200}
          height={500}
          className='w-full object-cover'
        />
        <div className='flex justify-between px-4 pt-4 items-center'>
          <div className='flex space-x-4 items-center'>
            <AiOutlineHeart className='btn' />
            <AiOutlineMessage className='btn' />
            <GoPaperAirplane className='btn -rotate-45' />
          </div>
          <BsBookmark className='btn' />
        </div>
        <p className='px-4 py-4  truncate'>
          <span className='font-bold mr-2'>Adysed</span>nice picture!
        </p>

        {/* comments */}
        <div className='px-4 max-h-24 overflow-y-scroll scrollbar-none cursor-pointer'>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=5'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Prowen</p>
            <p className='flex-1 truncate'>nice</p>
            <p>2 hours ago</p>
          </div>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=4'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Inclaboy2</p>
            <p className='flex-1 truncate'>amazing</p>
            <p>4 hours ago</p>
          </div>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=7'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Theorand</p>
            <p className='flex-1 truncate'>great!</p>
            <p>2 days ago</p>
          </div>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=9'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Olvery</p>
            <p className='flex-1 truncate'>🥰</p>
            <p>1 month ago</p>
          </div>
        </div>

        {/* post input box */}
        <form className='flex items-center p-4'>
          <HiOutlineEmojiHappy size={28} />
          <input
            type='text'
            placeholder='Enter your comment...'
            className='border-none flex-1 focus:ring-0 ml-3'
          />
          <button className='font-bold text-blue-400'>Post</button>
        </form>
      </div>

      {/* two post card */}
      <div className='border my-7 bg-white rounded-md'>
        <div className='flex items-center p-5'>
          <img
            src='https://i.pravatar.cc/150?img=10'
            alt='img'
            className='h-12  rounded-full border p-1 mr-3'
          />
          <p className='flex-1 font-bold'>Adysed</p>
          <BsThreeDots />
        </div>

        {/* post image */}
        <Image
          src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt='img'
          width={1200}
          height={500}
          className='w-full object-cover'
        />
        <div className='flex justify-between px-4 pt-4 items-center'>
          <div className='flex space-x-4 items-center'>
            <AiFillHeart className='btn fill-red-500' />
            <AiOutlineMessage className='btn' />
            <GoPaperAirplane className='btn -rotate-45' />
          </div>
          <BsBookmarkFill className='btn' />
        </div>
        <p className='px-4 py-4  truncate'>
          <span className='font-bold'>2 likes</span>
          <br />
          <span className='font-bold mr-2'>Adysed</span>nice view!
        </p>

        {/* comments */}
        <div className='px-4 max-h-24 overflow-y-scroll scrollbar-none cursor-pointer'>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=5'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Prowen</p>
            <p className='flex-1 truncate'>nice</p>
            <p>2 hours ago</p>
          </div>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=4'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Inclaboy2</p>
            <p className='flex-1 truncate'>amazing</p>
            <p>4 hours ago</p>
          </div>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=7'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Theorand</p>
            <p className='flex-1 truncate'>great!</p>
            <p>2 days ago</p>
          </div>
          <div className='flex items-center space-x-2 mb-2'>
            <img
              src='https://i.pravatar.cc/150?img=9'
              alt='avatar'
              className='rounded-full h-7 object-cover'
            />
            <p className='font-semibold'>Olvery</p>
            <p className='flex-1 truncate'>🥰</p>
            <p>1 month ago</p>
          </div>
        </div>

        {/* post input box */}
        <form className='flex items-center p-4'>
          <HiOutlineEmojiHappy size={28} />
          <input
            type='text'
            placeholder='Enter your comment...'
            className='border-none flex-1 focus:ring-0 ml-3'
          />
          <button className='font-bold text-blue-400'>Post</button>
        </form>
      </div>
    </div>
  )
}
export default HeroPostItem
