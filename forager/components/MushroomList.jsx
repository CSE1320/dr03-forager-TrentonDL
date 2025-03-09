import React from "react";
import Postcard from "./Postcard";
import { mushrooms } from "@/data/development";

const MushroomList = () => {
    return (
        <ul className="mushroom-list flex flex-wrap justify-center">
            {mushrooms.map((mushroom, index) => (
                <Postcard 
                    key={index}
                    mushroom={mushroom}
                />
            ))}
        </ul>
    );
}

export default MushroomList;