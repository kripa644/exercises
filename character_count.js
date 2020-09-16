"use strict";
function countBs(s) {
    let count1 = 0;
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] == "B") {
            count1++;
        }
    }
    return count1;
}

function countChar(str, c) {
    let count2 = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == c) {
            count2++;        
        }
    }
    return count2;
}
console.log(countBs("BBs"));
console.log(countChar("kakkerlak", "k"));