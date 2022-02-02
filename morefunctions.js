const characters = [
  {
    id: 1,
    name: {
      firstName: "Sonic",
      lastname: "Hedgehog",
    },
    games: ["Sonic 1", "Sonic 2"],
  },
  {
    id: 2,
    name: {
      firstName: "Lara",
      lastName: "Croft",
    },
    games: ["Tomb Raider", "Tomb Raider 2"],
  },
];
function getAllGames(characters) {
  const result = [];
  for (let i = 0; i < characters.length; i++) {
    let games = characters[i].games;
    for (let j = 0; j < games.length; j++) {
      result.push(games[j]);
    }
  }
  return result;
}

console.log(getAllGames(characters));
