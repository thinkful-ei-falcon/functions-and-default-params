const littleYacht = {
    hornSound: "Ride of the Walkeries",
    playHorn: function() {
      console.log(this.hornSound);
    }
};
console.log(littleYacht.hornSound)  //hornsound:"w"

littleYacht.playHorn(); 

const biggerYacht = {
  hornSound: "Fog Horn",
  playHorn: function() {
    console.log(this.hornSound);
  }
};

biggerYacht.playHorn(); 