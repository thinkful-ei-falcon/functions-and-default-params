const littleYacht = {
    floorColor: "red",
    maximumLbs: 1000,
    inOperation: true,
    christened: false,
    hornSound: "Ride of the Walkeries",
    "Dock Name": "oceania",
    //Dock Name: "oceania",
 
    playHorn: function() {
        console.log(this.hornSound);
    }
};

let dante = {
    breed:'Cattle Dog Mix',
    age: 4,
    bark(){
        console.log('Wooof woof');
    }
}

dante.bark()

console.log(littleYacht.floorColor);
console.log(littleYacht["floorColor"]);


// console.log(littleYacht[floorColor]);

console.log(littleYacht["Dock Name"]);
// console.log(littleYacht.Dock Name);

littleYacht.playHorn()




function drive(){
    console.log('The car is driving!'); 
}


const toyota = {
    make: 'Toyota',
    model: 'Corolla',
    // This is a method
    drive() {
      console.log('The car is driving!'); 
    },
    // It's shorthand for this
    useHorn: function() {
        console.log('Beep');
    }
  }


  const honda = {
    make: 'Honda',
    model: 'Civic',
    // This is a method
    drive:toyota.drive,
    // It's shorthand for this
    useHorn: function() {
        console.log('Beep');
    }
  }
  