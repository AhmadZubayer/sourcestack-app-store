import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import AppCard from './AppCard';

const TrendingApps = () => {
    const { appData } = useLoaderData();
    const navigate = useNavigate();
    
    const trendingApps = [...appData]
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 8);

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Trending Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingApps.map(app => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button 
                    onClick={() => navigate('/allApps')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                >
                    Show All Apps
                </button>
            </div>
        </div>
    );
};

export default TrendingApps;