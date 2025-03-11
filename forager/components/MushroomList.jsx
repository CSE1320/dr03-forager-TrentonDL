import React from "react";
import Postcard from "./Postcard";
import { mushrooms } from "@/data/development";

const MushroomList = () => {
    return (
        <div className="mushroom-list-container px-4">
            <ul className="mushroom-list grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-4">
                {mushrooms.map((mushroom, index) => (
                    <Postcard
                        key={index}
                        image={mushroom.image}
                        alt={mushroom.alt}
                        name={mushroom.name}
                        percentage={mushroom.percentage}
                        isToxic={mushroom.isToxic}
                        showPercentage={false} // Do not show percentage in MushroomList
                    />
                ))}
            </ul>
        </div>
    );
}

export default MushroomList;