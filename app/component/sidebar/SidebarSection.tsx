import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SubSection } from '@/app/types';

interface SidebarSectionProps {
    icon: IconProp;
    title:string;
    iconHeight?:string;
    iconWidth?:string;
    textSize?:string;
    subSection?:SubSection[];
    currentSection:string;
    setActivitedSection:(section:string) => void;
}

const SidebarSection:React.FC<SidebarSectionProps> = ({
  icon,
  title,
  iconHeight,
  iconWidth,
  textSize,
  subSection,
  currentSection,
  setActivitedSection
}) => {
  const [toggleSubSection, setToggleSubSection] = useState(false);
  const [hoverSection, setHoverSection] = useState(false);

  const onHover = () => {
    setHoverSection(true);
  }

  const onLeave = () => {
    setHoverSection(false);
  }

  const setSectionStatus = (title:string) => {
    setActivitedSection(title);
    setToggleSubSection(pre=>!pre);
  }

  return (
    <div className='flex flex-col'>
      <div 
        className={`
          flex 
          flex-row 
          p-3
          items-center
          justify-between
          gap-2
          hover:bg-deepblue
          rounded-lg
          cursor-pointer
          ${currentSection === title ? 'bg-deepblue' : ''}

        `}
        onClick={()=>setSectionStatus(title)}
        onMouseEnter={onHover} 
        onMouseLeave={onLeave}
      >
          <div className='flex flex-row items-center'>
            <div
              className={`
                ${iconWidth?iconWidth:'w-6'}
                ${iconHeight?iconHeight:'h-6'} 
              `}  
            >
              <FontAwesomeIcon
                icon={icon} 
                size='lg' 
                color={ hoverSection === true || currentSection === title ? 'white' : '#474D71'}
              />
              </div>
            <div 
              className={`
                ${textSize?textSize:'text-sm '}
                font-bold 
                ml-1
                ${hoverSection === true || currentSection === title ? 'text-white' : 'text-blue-950'} 
              `}
            >
              {title}
            </div>
          </div>
          {subSection?
            <div 
              className={`
                mr-2
                ${hoverSection === true || currentSection === title ? 'text-white' : 'text-blue-950'} 
              `}
            >
                ▼
            </div>
          :null}
      </div>
      {/* submenu */}
      {subSection ? 
        <div
          className={`
            flex-col 
            mt-1
            gap-1
            transition-all
            duration-300
            overflow-hidden
            ${toggleSubSection? 'max-h-full' : 'max-h-0'}
          `}
        >
          {subSection?.map((section)=>{
            return (
              <div 
                className={`
                  flex 
                  flex-row 
                  cursor-pointer 
                  hover:bg-slate-400 
                  p-2 
                  rounded-lg 
                  items-center 
                  ml-8
                  mt-1
                  ${currentSection === section.title ? 'bg-slate-400' : ''}
                `}
                onClick={()=>setActivitedSection(section.title)}
              >
                <FontAwesomeIcon
                  icon={section.icon} 
                  size='sm' 
                  color='#474D71'
                />
                <div className='text-sm text-blue-950 font-bold ml-2'>{section.title}</div>
              </div>
            )
          })}
        </div> : null}
    </div> 
  )
}

export default SidebarSection;
