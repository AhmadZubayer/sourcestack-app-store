import React from 'react';
import Banner from '../ui/Banner';
import Stats from '../ui/Stats';
import TrendingApps from '../apps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;