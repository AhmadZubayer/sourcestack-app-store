import React, { useState } from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';

const AppDetails = ({app}) => {
    const chartData = app.ratings;
    
    const checkIfInstalled = (appId) => {
        const saved = localStorage.getItem('installedApps');
        // checks if installedApps in localStorage has anything stored or not.
        const installedApps = saved ? JSON.parse(saved) : [];
        // if stored, converts the data to array.
        return installedApps.includes(appId);
        // retruns boolean value if that particular app ID is present at the array. 
    };

    const [installed, setInstalled] = useState(checkIfInstalled(app.id));
    // initial install status is determined from the array. 
    // useState() is used here to toggle UI changes. 

    const handleInstall = () => {
        const saved = localStorage.getItem('installedApps');
        let installedApps = saved ? JSON.parse(saved) : [];

        if (!installedApps.includes(app.id)) {
            installedApps.push(app.id);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            setInstalled(true);

            toast.success(`${app.title} installed successfully!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div className="bg-gray-50 p-4 md:p-8">
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 mx-auto md:mx-0">
                        <img 
                            src={app.image}
                            alt={app.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">{app.title}</h1>
                        <p className="text-sm text-gray-600 mb-4 md:mb-6 text-center md:text-left">
                            Developed by <span className="text-blue-600">{app.companyName}</span>
                        </p>
                        
                    

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 border-t border-b border-gray-200 py-4 my-6">
                            <div className="text-center flex-1">
                                <img src={downloadIcon} alt="downloads" className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-xs text-gray-500 mb-1">Downloads</p>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">
                                    {app.downloads >= 1000000 ? `${(app.downloads / 1000000).toFixed(0)}M` : app.downloads}
                                </p>
                            </div>

                            <div className="text-center flex-1">
                                <img src={ratingIcon} alt="rating" className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-xs text-gray-500 mb-1">Average Ratings</p>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">{app.ratingAvg}</p>
                            </div>

                            <div className="text-center flex-1">
                                <img src={reviewIcon} alt="reviews" className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-xs text-gray-500 mb-1">Total Reviews</p>
                                <p className="text-xl md:text-2xl font-bold text-gray-900">
                                    {app.reviews >= 1000 ? `${(app.reviews / 1000).toFixed(0)}K` : app.reviews}
                                </p>
                            </div>
                        </div>

                        <button 
                            onClick={handleInstall}
                            disabled={installed}
                            className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>
                <div className='border-t border-b border-gray-200 py-4 my-6'>
                    <h2 className="text-lg md:text-xl text-black font-bold mb-4">Ratings</h2>
                
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartData} layout="vertical">
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" width={60} />
                        <Bar dataKey="count" fill="#ff8800" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
                <div>
                    <h2 className="text-xl text-black font-bold mb-4">Description</h2>
                    <p className='text-black text-lg md:text-md leading-relaxed'>{app.description}</p>


                </div>
            </div>
        </div>
    );
};

export default AppDetails;