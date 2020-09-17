let patternLine = "";
let size = 8;
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if ((i + j) % 2 === 0) {
            patternLine += " ";
        }
        else {
            patternLine += "#";
        }
    }   
    patternLine += "\n";
}
console.log(patternLine);