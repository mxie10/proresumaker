import React from 'react'

interface HeaderProps {
  title?:string;
  subTitle?:string;
  subSectionTitle?:string;
  subAction?:any;
}

const Header:React.FC<HeaderProps> = ({
  title,
  subTitle,
  subSectionTitle,
  subAction
}) => {
  return (
    <div
        className='
            hidden
            md:block
            border-b-2
            border-neutral-200
            px-7
            pt-7
            pb-2
        '
    >
        <div className='flex flex-row items-center justify-between'>
                <div>
                    <div className='font-bold text-3xl'>{title}</div>
                    {subTitle?<div className='text-sm text-neutral-400'>{subTitle}</div>:null}
                </div>
                <div>{subAction?<>subsection</>:null}</div>
        </div>
    </div>
  )
}

export default Header;
