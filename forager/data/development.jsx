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

function getPillColor(pillSelected) {
    if (pillSelected === false) {
        return '#D9D9D9'; // Grey color for unselected
    }
    else if (pillSelected === true) {
        return '#579076'; // Green color for selected
    }
    else {
        return '#FF0000'; // Red color for error
    }
}

const pills = [
    { 
        text: "Favorite",
        pillFilterType: 'tags',
        pillSelected: true,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    { 
        text: "Recent",
        pillFilterType: 'tags',
        pillSelected: false,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    { 
        text: "Texas",
        pillFilterType: 'Region',
        pillSelected: true,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    {
        text: "North America",
        pillFilterType: 'Region',
        pillSelected: false,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    {
        text: "Europe",
        pillFilterType: 'Region',
        pillSelected: false,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    {
        text: "Asia",
        pillFilterType: 'Region',
        pillSelected: false,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    {
        text: "Africa",
        pillFilterType: 'Region',
        pillSelected: false,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    },
    {
        text: "South America",
        pillFilterType: 'Region',
        pillSelected: false,
        pillColor: function(){
            return getPillColor(this.pillSelected);
        }
    }
];

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
export {warningMessage, dummyData, mushrooms, pills}; // Requires import {warningMessage, dummyData} from './data/development.js';
