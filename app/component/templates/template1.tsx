import React from 'react';

interface Template1Props {

}

const Template1:React.FC<Template1Props> = () => {
    
    //transform scale-2
    return (
        <div 
            className='
                flex
                flex-col
                shadow-md
                w-800
                min-h-1000
                border-2    
            '
        >
            {/* Basic information and professional summary */}
            <div className='
                flex 
                flex-row
                p-0
                min-h-20
                h-auto
            '>
                <div className='w-2/6 bg-red-100'>
                    <div>This is a test message</div>
                    
                </div>
                <div className='w-4/6 bg-red-50'>
                    This is a test message, test
                </div>
            </div>
            {/* Skills and work history */}
            <div className='
                flex 
                flex-row
                min-h-50
                h-auto
            '>
                <div className='w-2/6 bg-red-50 '>

                </div>
                <div className='w-4/6 bg-white '>

                </div>
            </div>
        </div>
    );
};

export default Template1;
