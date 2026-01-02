import React from 'react';
import { useNavigate } from 'react-router';
import errorImage from '../../assets/error-404.png';

const PageDoesNotExist = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-md w-full text-center">
                <img 
                    src={errorImage} 
                    alt="404 Error" 
                    className="w-full max-w-sm mx-auto mb-8"
                />
                <h2 className='text-3xl md:text-4xl text-gray-800 font-bold mb-3'>
                    Oops, page not found!
                </h2>
                <p className='text-gray-500 text-base mb-8'>
                    The page you are looking for is not available.
                </p>
                <button 
                    onClick={() => navigate('/')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                >
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default PageDoesNotExist;