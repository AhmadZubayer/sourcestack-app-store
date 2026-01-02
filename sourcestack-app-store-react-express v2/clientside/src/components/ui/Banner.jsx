import React from 'react';
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/app-store.png';
import hero from '../../assets/hero.png';


const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 mx-auto px-4 py-8'>
            <h1 className='font-bold text-5xl text-center '>
                We Build <br /><span className='text-[#804fe8]'> Productive </span> Apps
            </h1>
            <p className='text-center text-lg'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> 
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex gap-5'>
                <a 
                    href="https://play.google.com/store" 
                    className='flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition cursor-pointer'
                >
                    <img src={googlePlay} alt="Google Play" className='w-6 h-6' />
                    <span className='font-medium'>Google Play</span>
                </a>
                <a 
                    href="https://www.apple.com/app-store/" 
                    className='flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition cursor-pointer'
                >
                    <img src={appStore} alt="App Store" className='w-6 h-6' />
                    <span className='font-medium'>App Store</span>
                </a>
            </div>
            <img src={hero} alt="" />

        </div>
    );
};

export default Banner;