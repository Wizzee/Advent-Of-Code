import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { PRIORITY_VALUES, UPPERCASE_PRIORITY_VALUE } from "./../index.js";

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

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
    
        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
        // split into groups
        let elves = inputs.split("\r\n");
        let groups = getGroups(elves);
        console.log(groups);
        findBadges(groups);
        const values = groups.map(group => group.value)
        console.log(values);
        console.log(values.reduce((previous, current) => previous + current, 0));
    } catch (err) {
        console.log(err);
    }
}

export default solve