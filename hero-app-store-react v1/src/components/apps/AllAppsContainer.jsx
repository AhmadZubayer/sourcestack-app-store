import React from 'react';
import AppCard from './AppCard';

const AllAppsContainer = ({ appsData }) => {
    console.log('All Apps:', appsData);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {appsData?.map(data => <AppCard key={data.id} app={data}></AppCard>)}
        </div>
    );
};

export default AllAppsContainer;