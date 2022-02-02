const littleYacht = {
    "Dock Name": "oceania",
    floorColor: "red",
    christened: false,
    hornSound: "Ride of the Walkeries",
    playHorn() {
        console.log(littleYacht.hornSound);
    }
};
 
const littleYacht2 = {
    roofColor: "green",  // new key, will be added
    christened: true     // duplicate key, will be overwritten
};
 
const newYacht = { ...littleYacht, ...littleYacht2 };
console.log(newYacht)



let nintendo = ['mario', 'zelda', 'pokemon'];
let sega = ['sonic', 'virtual fighters', 'rayman'];

let combinedGames = [...nintendo, ...sega]
console.log(combinedGames)