import React from 'react'

interface ItemButton {
    title:string;
    description:string;
    textColor?:string;
}

const ItemButton:React.FC<ItemButton> = ({
    title,
    description,
    textColor
}) => {
  return (
    <div
        className='
            p-3
            rounded-lg
            border-2
            w-2/4
            shadow-md
            hover:bg-blue-100
            cursor-pointer
        '
    >
        <div className={`text-lg font-bold ${textColor?textColor:''}`}>{title}</div>
        <div className='text-neutral-400 text-sm'>{description}</div>
    </div>
  )
}

export default ItemButton;
