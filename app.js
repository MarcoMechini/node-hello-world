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