//Slice / Substring
let str = "mo money mo problems";
let newStr = str.slice(3,8);
console.log(newStr)
let newStr2 = str.substring(12)
console.log(newStr2)

//Split
let lyric = "If everything is dipped in gold, it will never grow";
let lyricArr = lyric.split(" ");
console.log(lyricArr);

//Splice (Arrays)
lyricArr.splice(5,1,"platinum,");
console.log(lyricArr);

//Join

let newLyricStr = lyricArr.join(" ");
console.log(newLyricStr)


//Substring