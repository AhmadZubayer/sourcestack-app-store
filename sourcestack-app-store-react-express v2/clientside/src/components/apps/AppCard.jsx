import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { useNavigate } from 'react-router';

const AppCard = ({ app }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/app/${app.id}`);
    };

    const formatDownloads = (downloads) => {
        if (downloads >= 1000000) {
            return `${(downloads / 1000000).toFixed(1)}M`;
        } else if (downloads >= 1000) {
            return `${(downloads / 1000).toFixed(1)}K`;
        }
        return downloads;
    };

    return (
        <div 
            onClick={handleCardClick}
            className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 w-[304px] h-[344px] flex flex-col cursor-pointer hover:scale-110"
        >
            <div className="rounded-lg w-full h-64 mb-2 flex items-center justify-center overflow-hidden p-4">
                <img 
                    src={app.image} 
                    alt={app.title}
                    className="max-w-40 max-h-40 w-auto h-auto object-contain"
                />
            </div>
            
            <h3 className="font-semibold text-gray-800 text-xl mb-2">
                {app.title}
            </h3>
            
            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs">
                    <img src={downloadIcon} alt="downloads" className="w-3 h-3" />
                    <span className="font-medium">{formatDownloads(app.downloads)}</span>
                </div>
                
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs">
                    <img src={ratingIcon} alt="rating" className="w-3 h-3" />
                    <span className="font-medium">{app.ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default AppCard;