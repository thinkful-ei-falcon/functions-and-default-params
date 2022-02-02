function createCat(name) {
    const color = getRandomColor();
  
    return {
      eyes: 2,
      legs: 4,
      name,     // same as name: name
      color,    // same as color: color
      checkCatEyeColor(){
          console.log(this.eyes);
      }
    };
  }

  function getRandomColor(){
      return 'blue';
  }
  
  const myCat = createCat('tabby');
  console.log(myCat);