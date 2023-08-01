/* eslint-disable @next/next/no-img-element */
const HeroRight = () => {
  return (
    <div className='hidden lg:inline-grid lg:col-span-1'>
      <div className='fixed w-[380px]'>
        <div className='flex items-center justify-between mt-14 ml-10'>
          <img
            src='https://yt3.googleusercontent.com/ytc/AOPolaSZDA_-W-C-dpVo4BtwlIBmTIEti1UcNqS8g9F7oQ=s900-c-k-c0x00ffffff-no-rj'
            alt='img'
            className='h-16 rounded-full border p-[2px] '
          />
          <div className='flex-1 ml-4'>
            <p className='font-bold'>codewithshand</p>
            <p className='text-gray-400 text-sm'>Welcome to instagram</p>
          </div>
          <button className='font-semibold text-blue-400 text-sm'>
            Sign out
          </button>
        </div>
        <div className='mt-4 ml-10'>
          <div className='flex items-center justify-between mb-5 text-sm'>
            <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 font-semibold'>See all</button>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <img
              src='https://i.pravatar.cc/150?img=49'
              alt='avatar'
              className='rounded-full h-10 object-cover p-[2px] border'
            />
            <div className='flex-1 ml-4'>
              <p className='font-semibold text-sm'>Prowen</p>
              <p className='text-sm text-gray-400'>Manager</p>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>
              Follow
            </button>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <img
              src='https://i.pravatar.cc/150?img=47'
              alt='avatar'
              className='rounded-full h-10 object-cover p-[2px] border'
            />
            <div className='flex-1 ml-4'>
              <p className='font-semibold text-sm'>Helen32</p>
              <p className='text-sm text-gray-400'>Model</p>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>
              Follow
            </button>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <img
              src='https://i.pravatar.cc/150?img=42'
              alt='avatar'
              className='rounded-full h-10 object-cover p-[2px] border'
            />
            <div className='flex-1 ml-4'>
              <p className='font-semibold text-sm'>Karen41</p>
              <p className='text-sm text-gray-400'>Engineer</p>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroRight
