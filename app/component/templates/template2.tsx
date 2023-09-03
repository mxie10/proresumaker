import React, { Dispatch, SetStateAction, useRef } from 'react';

interface Template2Props {
    data: any
    description?: string
}

const Template2: React.FC<Template2Props> = ({
    data,
    description
}) => {

    const experienceRef = useRef<HTMLDivElement>(null);

    //transform scale-2
    return (
        <div
            className='
                    flex
                    flex-col
                    shadow-md
                    w-800
                    h-1000
                    border-solid
                    border-2
                '
            style={{ zoom: 0.65 }}
        >
            <div className='flex flex-row w-full h-full'>
                <div className='w-1/3 bg-gray-300'>
                    <div className='mt-10 ml-2'>
                        <div className='text-4xl flex flex-col'>
                            <div>Chris</div>
                            <div>Candidates</div>
                        </div>
                        <div className='text-2xl mt-2'>Software Engineer</div>
                        <div className='mt-2'>xieyz12@gmail.com</div>
                        <div>(283)7773625</div>
                    </div>
                </div>
                <div className='w-2/3 bg-white'>
                    <div className='mt-4 ml-4'>
                        <div className='text-3xl'>Professional Experience</div>
                        <div className='' style={{ maxWidth: '95%' }} ref={experienceRef}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Template2;
