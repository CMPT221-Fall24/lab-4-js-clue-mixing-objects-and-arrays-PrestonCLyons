let suspectsArray = ["Professor Plum", "Miss Scarlett", "Colonel Mustard", "Mrs. Peacock", "Mr. Green", "Dr. Orchid"];
let weaponsArray = ["Candlestick", "Dagger", "Lead Pipe", "Revolver", "Rope", "Wrench", "Dictionary", "Axe"];
let roomsArray = ["Hall", "Study", "Ballroom", "Billiards room", "Dining room", "Kitchen", "Lounge", "Conservatory", "Library", "Balcony"];

function randomNumber(min, max) {
    return Math.round(Math.random() * [max - min] + min);
}

function selectRandom(array) {
    let selectedCard;
    if (array == suspectsArray){
        selectedCard = array[randomNumber(0,5)]
    }
    else if (array == weaponsArray) {
        selectedCard = array[randomNumber(0,7)]
    }
    else if (array == roomsArray) {
        selectedCard = array[randomNumber(0,9)]
    }
    else {
        console.log("Error in detecting the input array in randomSelector")
    }
    return (selectedCard);
}

// let mysterySolution;
function pickMystery() {
    let mysterySolution = {
        Suspects: selectRandom(suspectsArray),
        Weapons: selectRandom(weaponsArray),
        Rooms: selectRandom(roomsArray)
    }
    return (mysterySolution);
}

function revealMystery(object) {
    object = pickMystery();
    let mysteryResultText = object.Suspects + " killed Mr. Marist using the " + object.Weapons + " in the " + object.Rooms;
    // console.log(object.Suspects + " killed Mr. Marist using the " + object.Weapons + " in the " + object.Rooms)
    document.getElementById("outputMarkedText").innerHTML = mysteryResultText;
    // console.log(mysteryResultText);
    return(object.Supsects + " killed Mr. Marist using the " + object.Weapons + " in the " + object.Rooms);
}



// console.log(pickMystery())

revealMystery();
