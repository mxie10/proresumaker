import React, { useEffect, useRef, useState } from 'react'
import UserAvatar from './UserAvatar';
import SearchBar from '../SearchBar';
import useSidebar from '@/app/hooks/useSidebar';
import SidebarSection from './SidebarSection';
import { faWindowRestore as dashboard} from '@fortawesome/free-solid-svg-icons'
import { faUserTie as personalInfomation} from '@fortawesome/free-solid-svg-icons'
import { faBook as template}  from '@fortawesome/free-solid-svg-icons'
import { faRectangleList as applications } from '@fortawesome/free-solid-svg-icons'
import { faGear as settings } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion as help } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket as logout } from '@fortawesome/free-solid-svg-icons'
import { faMoon as nightmode } from '@fortawesome/free-solid-svg-icons'
import { SubSection } from '@/app/types';
import { useSection } from '@/app/hooks/useSection';

interface SidebarProps {}

const mainSections = [
    {
        icon: dashboard,
        title: 'DASHBOARD',
        subSection: [
            {
                icon:personalInfomation,
                title: 'SubSection1'
            },
            {
                icon:personalInfomation,
                title: 'SubSection2'
            }
        ]
    },
    {
        icon: template,
        title: 'RESUMES'
    },
    {
        icon: applications,
        title: 'APPLICATIONS'
    },
    {
        icon: settings,
        title: 'SETTINGS'
    },

]

const secondarySections = [
    {
        icon: help,
        title: 'HELP'
    },
    {
        icon: logout,
        title: 'LOG OUT'
    },
    {
        icon: nightmode,
        title: 'NIGHT MODE'
    },
]

const Sidebar: React.FC<SidebarProps> = ({
}) => {
    const sidebarModel = useSidebar();
    const { currentSection, setCurrentSection } = useSection();
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    // const [currentSection, setCurrentSection] = useState('RESUMES');

    const setActivitedSection = (section:string) => {
        setCurrentSection(section);
    }

    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                sidebarModel.onClose()
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div
            ref={sidebarRef}
            className={`
                h-full
                bg-gray-100
                w-1/2
                md:block
                md:w-1/4
                xl:w-15
                p-3
                transition-transform
                duration-300
                md:translate-x-0
                ${sidebarModel.isOpen ? 'translate-x-0' : '-translate-x-96 w-12'}
            `}
        >

            <UserAvatar/>
            <SearchBar/>

            <div 
                className='
                    flex
                    flex-col
                    justify-between
                    h-5/6
                '
            >
                {/* mainSections */}
                <div 
                    className='
                        flex
                        flex-col
                        mt-3
                        gap-1
                    '
                >
                    {mainSections.map((mainSection)=>{
                        return <SidebarSection 
                            icon={mainSection.icon} 
                            title={mainSection.title}
                            setActivitedSection={setActivitedSection}
                            currentSection={currentSection}
                            subSection={mainSection.subSection as SubSection[]}
                        />
                    })}
                </div>
                {/* secondarySections  */}
                <div 
                    className='
                        flex
                        flex-col
                        gap-1
                        mt-6
                    '
                >
                    {secondarySections.map((secondarySection)=>{
                        return <SidebarSection 
                            icon={secondarySection.icon} 
                            title={secondarySection.title}
                            setActivitedSection={setActivitedSection}
                            currentSection={currentSection}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
