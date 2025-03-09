import React from "react";

const Searchbar = () => {
    return (
        <div className="searchbar relative w-[80%] mx-auto mt-4">
            <form>
                <input 
                    type="text" 
                    id="search"
                    name="search"
                    placeholder="Search mushrooms..." 
                />
                <img className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                    src="../public/icons/search_icon.png" 
                    alt="search icon"
                />
            </form>
        </div>
    );
}

export default Searchbar;