import React from 'react'
import Header from './Header';

interface SectionBoxProps {
    title?:string;
    subTitle?:string;
    subAction?:any;
    bodyContent?: () => React.JSX.Element
}

const SectionBox:React.FC<SectionBoxProps> = ({
    title,
    subTitle,
    subAction,
    bodyContent
}) => {
  return (
    <div className='w-full h-full'>
        <Header title={title} subTitle={subTitle}/>
        <div className='p-7 h-9/10'>
            {bodyContent?bodyContent():null}
        </div>
    </div>
  )
}

export default SectionBox;
