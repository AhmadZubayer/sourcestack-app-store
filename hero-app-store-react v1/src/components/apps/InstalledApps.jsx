import React, { useState } from 'react';
import InstalledAppCard from './InstalledAppCard';

const InstalledApps = ({ appData }) => {
    const getInstalledAppsFromStorage = () => {
        const saved = localStorage.getItem('installedApps');
        return saved ? JSON.parse(saved) : [];
    };

    const [installedAppIds, setInstalledAppIds] = useState(getInstalledAppsFromStorage());
    const [sortType, setSortType] = useState('default');

    const handleRefresh = () => {
        setInstalledAppIds(getInstalledAppsFromStorage());
    };

    const installedApps = appData.filter(app => installedAppIds.includes(app.id));

    const sortedApps = [...installedApps].sort((a, b) => {
        switch (sortType) {
            case 'downloads-high':
                return b.downloads - a.downloads;
            case 'downloads-low':
                return a.downloads - b.downloads;
            default:
                return 0;
        }
    });

    const handleSortChange = (type) => {
        setSortType(type);
    };

    const getSortLabel = () => {
        switch (sortType) {
            case 'downloads-high':
                return 'Downloads: High-Low';
            case 'downloads-low':
                return 'Downloads: Low-High';
            default:
                return 'Sort By Downloads';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className='font-bold text-5xl text-center text-gray-900'>Your Installed Apps</h1>
                <p className='text-center mt-4 text-gray-600 text-lg'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-900 text-xl font-medium">
                    {installedApps.length} Apps Found
                </p>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        {getSortLabel()}
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                        <li><a onClick={() => handleSortChange('downloads-high')}>Downloads: High-Low</a></li>
                        <li><a onClick={() => handleSortChange('downloads-low')}>Downloads: Low-High</a></li>
                    </ul>
                </div>
            </div>

            {installedApps.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-xl mb-4">No apps installed yet</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {sortedApps.map(app => <InstalledAppCard key={app.id} app={app} onUninstall={handleRefresh} />)}
                </div>
            )}
        </div>
    );
};

export default InstalledApps;