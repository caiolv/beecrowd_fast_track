let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

const winner = ["A", "B", "C"];

function getWinnerFromLine(line) {
    line = line.split(" ");
    for (var bet in line) {
        let bets = line.filter(b => +b === +line[bet]);
        
        if (bets.length === 1)
            return console.log(winner[bet]);
        if (bets.length === 3)
            return console.log("*");
    }
}

for (let line of lines) {
    getWinnerFromLine(line);
}