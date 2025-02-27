// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const mushrooms = {
    mushrooms: [
        {  
            name: "Death Cap",
            favorite: false,
            toxic: true,
            picture: "../public/img/death_cap.png",
        },
        {
            name: "Paddy Straw",
            favorite: false,
            toxic: false,
            picture: "../public/img/paddy_straw.png",
        },
        {
            name: "Destroying Angel",
            favorite: false,
            toxic: true,
            picture: "../public/img/destroying_angel.png",
        },
        {
            name: "False Death Cap",
            favorite: false,
            toxic: true,
            picture: "../public/img/false_death_cap.png",
        },
        {
            name: "Puffball",
            favorite: true,
            toxic: false,
            picture: "../public/img/turkey_tail.png",
        },
    ]
}

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushrooms}; // Requires import {warningMessage, dummyData} from './data/development.js';
