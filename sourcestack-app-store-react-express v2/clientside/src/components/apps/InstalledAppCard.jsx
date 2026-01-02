import React from 'react';
import { toast } from 'react-toastify';

const InstalledAppCard = ({ app, onUninstall }) => {

    const handleUninstall = () => {
        const saved = localStorage.getItem('installedApps');
        let installedApps = saved ? JSON.parse(saved) : [];
        installedApps = installedApps.filter(id => id !== app.id);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        
        onUninstall();
        
        toast.success(`${app.title} uninstalled successfully!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                    <img 
                        src={app.image} 
                        alt={app.title}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {app.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-teal-500 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                            {app.downloads >= 1000000 ? `${(app.downloads / 1000000).toFixed(1)}M` : 
                             app.downloads >= 1000 ? `${(app.downloads / 1000).toFixed(0)}K` : app.downloads}
                        </span>
                        <span className="text-yellow-500 flex items-center gap-1">
                            ⭐ {app.ratingAvg}
                        </span>
                        <span className="text-gray-500">
                            {app.size} MB
                        </span>
                    </div>
                </div>
            </div>

            <button 
                onClick={handleUninstall}
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
                Uninstall
            </button>
        </div>
    );
};

export default InstalledAppCard;