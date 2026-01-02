import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllAppsContainer from '../apps/AllAppsContainer';
import SearchApp from '../apps/SearchApp';
import AppNotFound from './AppNotFound';
import Loading from '../ui/Loading';
import useAxios from '../hooks/useAxios';

const AllApps = () => {
    const appsAxios = useAxios();
    const [apps, setApps] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 12;
    
   
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const skip = currentPage * limit;
        const fetchApps = async () => {
            setIsLoading(true);
            try {
                const res = await appsAxios.get(`/apps?limit=${limit}&skip=${skip}`);

                setApps(res.data.apps);
                setTotalCount(res.data.total);
                const page = Math.ceil(res.data.total / limit); // Change totalCount to total
                setTotalPages(page);
            } catch (error) {
                console.error('Error fetching apps:', error);
                setApps([]);
                setTotalCount(0);
                setTotalPages(0);
            } finally {
                setIsLoading(false);
            }
        };

        const timer = setTimeout(() => {
            fetchApps();
        }, 300);

        return () => clearTimeout(timer);
    }, [currentPage, sortField, sortOrder, searchTerm]);

    const createPageNum = [...Array(totalPages).keys()];
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <h1 className='font-bold text-5xl text-center'>Our Applications</h1>
                <p className='text-center mt-4 text-lg'>
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
                
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-600 text-lg font-medium">
                        ({totalCount}) Apps Found
                    </p>
                    <SearchApp 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm}
                    />
                </div>

                {/* Sort Controls */}
                <div className="flex space-x-2 mb-4">
                    <select
                        className="select select-bordered"
                        value={sortField}
                        onChange={(e) => setSortField(e.target.value)}
                    >
                        <option value="name">Name</option>
                        <option value="createdAt">Created Date</option>
                        <option value="rating">Rating</option>
                    </select>

                    <select
                        className="select select-bordered"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            
            {isLoading ? (
                <Loading />
            ) : totalCount === 0 ? (
                <AppNotFound />
            ) : (
                <>
                    <AllAppsContainer appsData={apps}></AllAppsContainer>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {currentPage > 0 && (
                            <button onClick={() =>setCurrentPage(currentPage - 1)} className='btn btn-sm'>Previous</button>

                            )}
                            {createPageNum.map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setCurrentPage(num)}
                                    className={`btn btn-sm ${
                                        currentPage === num ? 'btn-primary' : 'btn-outline'
                                    }`}
                                >
                                    {num + 1}
                                </button>
                            ))}
                            {(currentPage < totalPages -1)  && (
                            <button  onClick={() =>setCurrentPage(currentPage + 1)} className='btn btn-sm'>Next</button>
                            )}

                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllApps;