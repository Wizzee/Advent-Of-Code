import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

function getStacks(lines) {
    const stacks = {};
    lines.pop().split(" ").forEach(stack => {
        if(stack !== "") {
            stacks[stack] = [];
        }
    });
    return stacks;
}

function populateStacks(stacks, lines) {
    // for each entry on a line, put a box on top of the stack
    // the stack should be the index of the line + 1
    for(const [index, value] of lines) {
        if(value !== "") {
            stacks[index + 1].unshift(value);
        }
    }
}

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
        const [boxes, instructions] = inputs.split("\n\n");
        let lines = boxes.split("\n");
        lines = lines.map(line => line.split(" "));
        const stacks = getStacks(lines);
        populateStacks(stacks,lines)
        console.log(stacks);
        console.log(instructions);
        console.log(lines);
    } catch (err) {
        console.log(err);
    }
}

export default solve