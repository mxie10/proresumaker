import React from 'react'
import { useRouter } from "next/navigation";
import ItemButton from './ItemButton';

const itemButtons = [
    {
        title: "Update Personal Information",
        description: "Edit your personal profile, click the button to start editing."
    },
    {
        title: "Change Subscription Plan",
        description: "Change your subscription plan, click the button to proceed with the update."
    },
    {
        title: "Manage Notifications",
        description: "Click the button to customize your notification settings."
    },
]

const Settings = () => {
    const router = useRouter();
    return (
        <div className='h-full flex flex-col justify-between'>
            <div className='flex flex-col gap-3'>
                {itemButtons.map((itemButton)=>{
                    return  <ItemButton title={itemButton.title} description={itemButton.description} />
                })}  
            </div>
            <div className=''>
                <ItemButton 
                    title='Delete My Account' 
                    description=' Click the button to permanently delete your account.'
                    textColor='text-red-600'
                />
            </div>
        </div>
    )
}

export default Settings;
