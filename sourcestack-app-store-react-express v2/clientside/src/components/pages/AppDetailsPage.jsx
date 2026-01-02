import React from 'react';
import { useLoaderData } from 'react-router';
import AppDetails from '../apps/AppDetails';

const AppDetailsPage = () => {
    const {app} = useLoaderData();
    return (
        <div>
            <AppDetails app={app}></AppDetails>        
        </div>
    );
};

export default AppDetailsPage;