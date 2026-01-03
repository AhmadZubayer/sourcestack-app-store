import React, { useState, useEffect } from 'react';
import AllAppsContainer from '../apps/AllAppsContainer';
import AppNotFound from './AppNotFound';
import Loading from '../ui/Loading';
import useAxios from '../hooks/useAxios';

const AllApps = () => {
    const appsAxios = useAxios();
    const [apps, setApps] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState('title-asc');
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 12;

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const skip = currentPage * limit;
        const [sort, order] = sortField.split('-');

        const fetchApps = async () => {
            setIsLoading(true);
            try {
                const res = await appsAxios.get(`/apps?limit=${limit}&skip=${skip}&sort=${sort}&order=${order}&search=${search}`);

                setApps(res.data.apps);
                setTotalCount(res.data.total);
                const page = Math.ceil(res.data.total / limit);
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
    }, [currentPage, sortField, search]);

    const createPageNum = [...Array(totalPages).keys()];


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <h1 className='font-bold text-5xl text-center'>Our Applications</h1>
                <p className='text-center mt-4 text-lg'>
                    Explore All Apps on the Market developed by Trusted Companies, Verified by Us. We code for Millions.
                </p>

                <p className="text-gray-600 text-lg font-medium text-center mt-2">
                    ({totalCount}) Apps Found
                </p>

                {/* Search Bar and Sort Controls */}
                <div className="flex items-center gap-4 mt-6">
                    {/* Search Bar - 75% */}
                    <div className="w-3/4">
                        <label className="input flex items-center gap-2 w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                placeholder="Search Apps"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="outline-none w-full"
                            />
                        </label>
                    </div>

                    {/* Sort Controls - 25% */}
                    <div className="w-1/4 flex items-center gap-2">
                            <h2 className='font-bold text-lg whitespace-nowrap'>Sort By:</h2>
                            <select
                                className="select select-bordered select-sm flex-1"
                                value={sortField}
                                onChange={(e) => setSortField(e.target.value)}
                            >
                                <option value="title-asc">Name: A-Z</option>
                                <option value="title-desc">Name: Z-A</option>
                                <option value="ratingAvg-desc">Rating: High - Low</option>
                                <option value="ratingAvg-asc">Rating: Low-High</option>
                                <option value="downloads-desc">Downloads: High - Low</option>
                                <option value="downloads-asc">Downloads: Low - High</option>
                                <option value="size-desc">Size: High - Low</option>
                                <option value="size-asc">Size: Low-High</option>
                            </select>
                        </div>
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
                                    <button onClick={() => setCurrentPage(currentPage - 1)} className='btn btn-sm'>Previous</button>

                                )}
                                {createPageNum.map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setCurrentPage(num)}
                                        className={`btn btn-sm ${currentPage === num ? 'btn-primary' : 'btn-outline'
                                            }`}
                                    >
                                        {num + 1}
                                    </button>
                                ))}
                                {(currentPage < totalPages - 1) && (
                                    <button onClick={() => setCurrentPage(currentPage + 1)} className='btn btn-sm'>Next</button>
                                )}

                            </div>
                        )}
                    </>
                )}
            </div>
            );
};

            export default AllApps;