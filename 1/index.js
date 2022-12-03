const fs = require("fs");
try {
    const inputs = fs.readFileSync("./input.txt", 'utf8');
    let elves = inputs.split("\n\n");
    console.log(elves);
    elves = elves.map((elf) => {
        let temp = elf.split("\n").filter((values) => values.length > 0);
        return temp.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
    });
    const sorted = elves.sort((a, b) => { return b - a });
    console.log(sorted);
    const topThree = sorted[0] + sorted[1] + sorted[2];
    console.log(topThree);
} catch (err) {
    console.log(err);
}
