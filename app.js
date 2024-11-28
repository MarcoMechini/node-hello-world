const terminalWord = process.argv[2]
console.log(`Hello ${terminalWord}`);

// bonus 1
const userNumber = parseInt(process.argv[2])
if (process.argv[2] % 2) {
    console.log('Dispari');
} else {
    console.log('Pari');
}

// bonus2
// const terminalString = process.argv[2]
const terminaltestARr = process.argv.slice(2)
const terminalString = terminaltestARr.join(" ")
console.log(terminalString);

const vocals = 'aeiou';
let vocalCounter = 0;
const vocalsFindArr = [];
for (let i = 0; i < terminalString.length; i++) {
    const curVocal = terminalString[i];
    for (let j = 0; j < vocals.length; j++) {
        const curChar = vocals[j];
        if (curVocal === curChar) {
            vocalCounter++;
            vocalsFindArr.push(curVocal)
        }
    }
}
console.log(`Il counter delle vocali trovate è di: ${vocalCounter}`)
console.log(`Le vocali trovate sono: ${vocalsFindArr.join(" ")}`);
// PAROLA PER IL TEST
// supercalifragilistichespiralitoso
// A 3
// E 2
// I 6
// O 2
// U 1
// TOT 14