import React from 'react';
import Image from 'next/image';
import userPhoto from '../../resources/userPhoto/user1.jpg';

const UserAvatar = () => {
  return (
    <div className='flex flex-row'>
       <div>
            <Image 
                className='
                    w-11 
                    h-11 
                    rounded-full
                ' 
                src={userPhoto} 
                alt={''} 
            />
            <div 
                className='
                    w-3 h-3 
                    bg-green-500 
                    border 
                    border-white 
                    rounded-full 
                    relative 
                    -top-3 
                    left-8
                '
            />
        </div>
        <div className='flex flex-col w-2/5 md:w-1/2 ml-1 mt-1'>
            <div className='text-mxsm font-bold text-blue-800'>JOHN DOE</div>
            <div className='bg-orange-400 p-1 w-3/4 text-white text-xsm rounded-md text-center'>
                FREE PLAN
            </div>
        </div>
    </div>
  )
}

export default UserAvatar;