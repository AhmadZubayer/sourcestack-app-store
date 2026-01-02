import React from 'react';
import { useLoaderData } from 'react-router';
import InstalledApps from '../apps/InstalledApps';

const InstalledAppsPage = () => {
    const { appData } = useLoaderData();
    return (
        <div>
            <InstalledApps appData={appData} />
        </div>
    );
};

export default InstalledAppsPage;
