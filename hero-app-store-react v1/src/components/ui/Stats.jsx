import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[#642fe4] to-[#995df1] text-white py-12 px-4'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                    Trusted By Millions, Built For You
                </h2>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  
                    <div className='text-center'>
                        <p className='text-sm mb-2 opacity-90'>Total Downloads</p>
                        <h3 className='text-4xl md:text-5xl font-bold mb-2'>29.6M</h3>
                        <p className='text-sm opacity-80'>21% More Than Last Month</p>
                    </div>
                    
                 
                    <div className='text-center'>
                        <p className='text-sm mb-2 opacity-90'>Total Reviews</p>
                        <h3 className='text-4xl md:text-5xl font-bold mb-2'>906K</h3>
                        <p className='text-sm opacity-80'>46% More Than Last Month</p>
                    </div>
                    
                  
                    <div className='text-center'>
                        <p className='text-sm mb-2 opacity-90'>Active Apps</p>
                        <h3 className='text-4xl md:text-5xl font-bold mb-2'>132+</h3>
                        <p className='text-sm opacity-80'>37 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;