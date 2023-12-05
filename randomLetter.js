const randomWords = [
'Sapphire',
'Firefly',
'Whisper',
'Dragon',
'Jasmine',
'Cascade',
'Harmony',
'Mystery',
'Thunder',
'Galaxy',
'Tiger',
'Rainbow',
'Wonder',
'Pineapple',
'Eclipse'
];
let letter = '';
const theRandomiserForTheLetters = array =>{
    for(let i = 0 ; i<= Math.floor(Math.random() * 20) ; i++)
   letter += array[Math.floor(Math.random() * array.length)] + " "
    return letter;
};
console.log(theRandomiserForTheLetters(randomWords));