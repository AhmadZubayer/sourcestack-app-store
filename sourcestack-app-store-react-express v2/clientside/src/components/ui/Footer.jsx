import React from 'react';
import facebook from '../../assets/Footer Icons/facebook.png';
import instagram from '../../assets/Footer Icons/instagram.png';
import linkedin from '../../assets/Footer Icons/linkedin.png';
import youtube from '../../assets/Footer Icons/youtube.png';
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/app-store.png';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12 px-4'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                
              
                <div>
                    <h3 className='text-xl font-bold mb-4'>Useful Links</h3>
                    <ul className='space-y-2'>
                        <li><a href='#' className='hover:text-[#804fe8] transition'>About Us</a></li>
                        <li><a href='#' className='hover:text-[#804fe8] transition'>Contact</a></li>
                        <li><a href='#' className='hover:text-[#804fe8] transition'>Privacy Policy</a></li>
                        <li><a href='#' className='hover:text-[#804fe8] transition'>Terms of Service</a></li>
                        <li><a href='#' className='hover:text-[#804fe8] transition'>FAQ</a></li>
                        <li><a href='#' className='hover:text-[#804fe8] transition'>Support</a></li>
                    </ul>
                </div>

             
                <div>
                    <h3 className='text-xl font-bold mb-4'>Follow Us On</h3>
                    <div className='flex gap-4 mb-6'>
                        <a href='https://www.facebook.com'  className='hover:opacity-80 transition'>
                            <img src={facebook} alt="Facebook" className='w-8 h-8' />
                        </a>
                        <a href='https://www.instagram.com'  className='hover:opacity-80 transition'>
                            <img src={instagram} alt="Instagram" className='w-8 h-8' />
                        </a>
                        <a href='https://www.linkedin.com'  className='hover:opacity-80 transition'>
                            <img src={linkedin} alt="LinkedIn" className='w-8 h-8' />
                        </a>
                        <a href='https://www.youtube.com'  className='hover:opacity-80 transition'>
                            <img src={youtube} alt="YouTube" className='w-8 h-8' />
                        </a>
                    </div>
                    
                    <div className='space-y-3'>
                        <h3 className='text-xl font-bold mb-4'>Download Our App</h3>
                        <a 
                            href="https://play.google.com/store" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 px-4 py-2 border-2 border-gray-600 rounded-lg hover:border-gray-400 transition w-full justify-center cursor-pointer'
                        >
                            <img src={googlePlay} alt="Google Play" className='w-6 h-6' />
                            <span className='font-medium'>Google Play</span>
                        </a>
                        <a 
                            href="https://www.apple.com/app-store/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 px-4 py-2 border-2 border-gray-600 rounded-lg hover:border-gray-400 transition w-full justify-center cursor-pointer'
                        >
                            <img src={appStore} alt="App Store" className='w-6 h-6' />
                            <span className='font-medium'>App Store</span>
                        </a>
                    </div>
                </div>

              
                <div>
                    <h3 className='text-xl font-bold mb-4'>About</h3>
                    <p className='text-gray-300 mb-4 leading-relaxed'>
                        This is a project of Web Development course at Programming Hero made by Ahmad Zubayer.
                    </p>
                    <a 
                        href='https://github.com/AhmadZubayer/hero-app-store-react.git' 
                        className='inline-flex items-center gap-2 text-[#804fe8] hover:text-[#995df1] transition font-medium'
                    >
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                        </svg>
                        View Source Code
                    </a>
                </div>
            </div>

       
            <div className='max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm'>
                <p>&copy; 2025 HERO.IO - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;