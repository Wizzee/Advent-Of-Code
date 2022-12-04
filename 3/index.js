const fs = require("fs");

const UPPERCASE_PRIORITY_VALUE = 26
const PRIORITY_VALUES = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12, 
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18, 
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
};

function getStringFirstHalf(string) {
    return string.slice(0, string.length / 2);
}

function getStringSecondHalf(string) {
    return string.slice(string.length / 2, string.length);
}

function splitRucksacks(rucksacks) { 
    return rucksacks.map(rucksack => {
        return {
            first: getStringFirstHalf(rucksack),
            second: getStringSecondHalf(rucksack),
            value: 0
        }
    });
}

function findDuplicateItems(rucksacks) {
    rucksacks.forEach(rucksack => {
        for (let i = 0; i <= rucksack.first.length; i++) {
            const item = rucksack.first[i];
            if(rucksack.second.indexOf(item) >= 0) {
                rucksack.value = item.toLowerCase() === item ? 
                PRIORITY_VALUES[item] : 
                PRIORITY_VALUES[item.toLowerCase()] + UPPERCASE_PRIORITY_VALUE
                return;
            }
        };
    })
}

function getGroups(elves) {
    const groups = [];
    while (elves.length > 0) {
        groups.push(elves.splice(0, 3));
    }
    return groups.map(group => {
        return {
            first: group[0],
            second: group[1],
            third: group[2],
            value: 0
        }
    });
}

function findBadges(groups) {
    groups.forEach(group => {
        for (let i = 0; i <= group.first.length; i++) {
            const item = group.first[i];
            if(group.second.indexOf(item) >= 0 && group.third.indexOf(item) >= 0) {
                group.value = item.toLowerCase() === item ? 
                PRIORITY_VALUES[item] : 
                PRIORITY_VALUES[item.toLowerCase()] + UPPERCASE_PRIORITY_VALUE
                return;
            }
        };
    })
}

function solvePartOne(inputs) {
    let rucksacks = inputs.split("\r\n");
    rucksacks = splitRucksacks(rucksacks);
    findDuplicateItems(rucksacks);
    const values = rucksacks.map(rucksack => rucksack.value)
    console.log(values);
    console.log(values.reduce((previous, current) => previous + current, 0));
}

function solvePartTwo(inputs) {
    // split into groups
    let elves = inputs.split("\r\n");
    let groups = getGroups(elves);
    console.log(groups);
    findBadges(groups);
    const values = groups.map(group => group.value)
    console.log(values);
    console.log(values.reduce((previous, current) => previous + current, 0));
}

try {
    const inputs = fs.readFileSync("./part1/input.txt", 'utf8');
    solvePartOne(inputs);
} catch (err) {
    console.log(err);
}

try {
    const inputs = fs.readFileSync("./part2/input.txt", 'utf8');
    solvePartTwo(inputs);
} catch (err) {
    console.log(err);
}