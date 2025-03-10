import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import React from 'react';
import DashboardHeading from '@/components/DashboardHeading';
import Searchbar from '@/components/Searchbar';
import MushroomList from '@/components/MushroomList';
import { mushrooms } from '@/data/development';
import app from '@/server'; // Import the server if needed

export default function DashboardPage() {
    return (
        <div className="page">
            <DashboardHeading />
            <div className="search-filter-container flex flex-row justify-center">
                <Searchbar />
            </div>
            <div className="page h-auto flex flex-col items-center">
                <div className="mushroom-container p-4 pt-0 w-[90%] h-auto mt-8">
                    <h1 className="collection-header text-[#20385F] text-3xl font-nunito font-bold leading-normal">
                        My Collection
                    </h1>
                    <MushroomList mushrooms={mushrooms} />
                </div>
            </div>
            <NavBar />
        </div>
    );
};
