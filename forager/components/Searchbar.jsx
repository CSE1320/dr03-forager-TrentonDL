"use client";

import React, { useState } from "react";
import FilterOverlay from "./FilterOverlay";

const Searchbar = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleToggleFilter = (filterIndex) => {
        setActiveFilters((prevFilters) =>
            prevFilters.includes(filterIndex)
                ? prevFilters.filter((index) => index !== filterIndex)
                : [...prevFilters, filterIndex]
        );
    };

    const handleCloseFilter = () => {
        setShowFilter(false);
    };

    return (
        <div className="searchbar relative w-[80%] mx-auto mt-4">
            <form className="flex items-center">
                <div className="relative flex-grow">
                    <input 
                        type="text" 
                        id="search"
                        name="search"
                        placeholder="Search for a mushroom..." 
                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                    <img 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                        src="/icons/search_icon.png" 
                        alt="search icon"
                    />
                </div>
                <button 
                    type="button" 
                    className="ml-2 bg-transparent text-gray-400 rounded-full focus:outline-none"
                    onClick={toggleFilter}
                >
                    <img 
                        className="w-5 h-5" 
                        src="/icons/filter_icon.png" 
                        alt="filter icon"
                    />
                </button>
            </form>
            {showFilter && (
                <FilterOverlay
                    activeFilters={activeFilters}
                    onToggleFilter={handleToggleFilter}
                    onClose={handleCloseFilter}
                />
            )}
        </div>
    );
}

export default Searchbar;