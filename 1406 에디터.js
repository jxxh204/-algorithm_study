
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

const input = [
    'dmih',
    '11',
    'B',
    'B',
    'P x',
    'L',
    'B',
    'B',
    'B',
    'P y',
    'D',
    'D',
    'P z'
]

// const input = [
//     "abc",
//     "9",
//     "L",
//     'L',
//     'L',
//     'L',
//     'L',
//     'P x',
//     'L',
//     'B',
//     'P y'
// ]

const [base, length, ...command] = input
let cursor = base.length-1;
let result= base.split('')

for(let c of command) {
    console.log(c,cursor)
    switch(c.split(' ')[0]){
        case "L":
            if(cursor === -1) break;
            cursor--;
            break;
        case "D":
            if(cursor === result.length) break;
            cursor++;
            break;
        case "B":
            console.log(result)

            if(cursor === -1) break;
            result.splice(cursor,1)
            cursor--
            break;
        case "P": 
            cursor++;
            result.splice(cursor,0,c.split(' ')[1])
            break;
    }
}
console.log(result)
