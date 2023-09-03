'use client'
import './globals.css'
import Sidebar from './component/sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useSidebar from './hooks/useSidebar'
import ClientOnly from './component/ClientOnly'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebarModel = useSidebar();

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }
  
  const ToggleIcon = (
    <div 
      className="
        absolute 
        left-3 
        top-3 
        cursor-pointer 
        md:hidden
      "
      onClick={toggleSidebar}
    >
      <FontAwesomeIcon icon={faBars} size="xl"/>
    </div>
  )

  return (
    <html lang="en">
      <body className='flex flex-row'>
        <ClientOnly>
          {ToggleIcon}
          <Sidebar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
