import React from "react";
import Postcard from "./Postcard";
import { mushrooms } from "@/data/development";

const MushroomList = () => {
    return (
        <div className="mushroom-list-container px-4">
            <h2 className="text-center text-2xl font-bold mb-4">Mushroom List</h2>
            <ul className="mushroom-list grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-4">
                {mushrooms.map((mushroom, index) => (
                    <Postcard key={index} mushroom={mushroom} />
                ))}
            </ul>
        </div>
    );
}

export default MushroomList;