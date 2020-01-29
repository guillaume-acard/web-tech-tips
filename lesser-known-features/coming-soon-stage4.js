// Stage 4
const character = { 
    first: "Sterling", 
    last: "Archer", 
    seasons: 10,
    parent: {
      first: "Malory",
      last: "Archer"
    }
  };
  console.log(character.parent?.first); 
  console.log(character.someNonExistentMethod?.());
  // Instead of
  console.log(character.parent && character.parent.first);
  
  console.log(character.seasons ?? 0);
  console.log(character.parent.seasons ?? 0);