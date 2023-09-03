import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface SearchBar {
    width?: string;
    height?:string;
    backgroundColor?:string;
}

const SearchBar:React.FC<SearchBar> = ({
    width,
    height,
    backgroundColor
}) => {
  return (
    <div 
        className={`
            ${width?width:'w-full'}
            ${height?height:'h-8'}
            ${backgroundColor?backgroundColor:'bg-gray-200'}
            rounded-md
        `}
    >
        <div className='flex flex-row items-center'>
            <FontAwesomeIcon 
                className='
                  relative
                  top-1
                  left-3
                '
                icon={faMagnifyingGlass} 
                size="sm"
            />
            <input 
                className='
                    w-5/6
                    h-4/5
                    relative
                    left-3
                    bg-gray-200
                    top-1
                    text-sm
                    p-1
                '
                type="text"
                placeholder='SEARCH...'
            />
        </div>
    </div>
  )
}

export default SearchBar;
