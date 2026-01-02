import React from 'react';
import { useNavigate } from 'react-router';
import appErrorImage from '../../assets/App-Error.png';

const AppNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-md w-full text-center">
                <img 
                    src={appErrorImage} 
                    alt="App Not Found" 
                    className="w-full max-w-sm mx-auto mb-8"
                />
                <h2 className='text-3xl md:text-4xl text-gray-800 font-bold mb-3'>
                    OPPS!! APP NOT FOUND
                </h2>
                <p className='text-gray-500 text-base mb-8'>
                    The App you are requesting is not found on our system - please try another apps
                </p>
                <button 
                    onClick={() => navigate('/allApps')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                >
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default AppNotFound;