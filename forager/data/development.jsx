// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
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

const warningMessage = {
    header: "warning",
    icon: "../public/icons/warning_icon.png",
    message: "This is a toxic species, proceed with caution."
};

const createMushroom = (name, image, alt, warning) => ({
    name,
    image: `../public/img/${image}.png`,
    alt, 
    warning
});

const mushrooms = [
    createMushroom("Death Cap", "death_cap", "Death cap mushroom growing in a patch of leaves", true),
    createMushroom("Paddy Straw", "paddy_straw", "Two Paddy Straw mushrooms laying in the dirt", false),
    createMushroom("Destroying Angel", "destroying_angel", "Destroying Angel mushroom growing in a patch of leaves", true),
    createMushroom("False Death Cap", "false_death_cap", "False Death cap mushroom growing in a patch of leaves", true),
    createMushroom("Puffball", "puffball", "Three puffball mushrooms grouped together",false),
];


// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushrooms, pills}; // Requires import {warningMessage, dummyData} from './data/development.js';
