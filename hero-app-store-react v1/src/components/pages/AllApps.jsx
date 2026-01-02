import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllAppsContainer from '../apps/AllAppsContainer';
import SearchApp from '../apps/SearchApp';
import AppNotFound from './AppNotFound';
import Loading from '../ui/Loading';

const AllApps = () => {
    const {appData} = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [filteredApps, setFilteredApps] = useState(appData);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredApps(appData);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);

        const timer = setTimeout(() => {
            const filtered = appData.filter(app =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredApps(filtered);
            setIsSearching(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm, appData]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                
                <h1 className='font-bold text-5xl text-center'>Our Applications</h1>
                <p className='text-center mt-4 text-lg'>
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-600 text-lg font-medium">
                        ({filteredApps.length}) Apps Found
                    </p>
                    <SearchApp 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm}
                    />
                </div>
            </div>
            
            {isSearching ? (
                <Loading />
            ) : filteredApps.length === 0 ? (
                <AppNotFound />
            ) : (
                <AllAppsContainer appsData={filteredApps}></AllAppsContainer>
            )}
        </div>
    );
};

export default AllApps;