import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { PRIORITY_VALUES, UPPERCASE_PRIORITY_VALUE } from "./../index.js";

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

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
    
        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
        let rucksacks = inputs.split("\r\n");
        rucksacks = splitRucksacks(rucksacks);
        findDuplicateItems(rucksacks);
        const values = rucksacks.map(rucksack => rucksack.value)
        console.log("The answer is: " + values.reduce((previous, current) => previous + current, 0));
    } catch (err) {
        console.log(err);
    }
}

export default solve