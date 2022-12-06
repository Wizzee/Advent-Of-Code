import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

function getStacks(lines) {
    const stacks = {};
    let stackCols = lines.pop();
    stackCols.forEach(stack => {
        if(stack !== "") {
            stacks[stack] = [];
        }
    });
    return stacks;
}

function populateStacks(stacks, lines) {
    // for each entry on a line, put a box on top of the stack
    // the stack should be the index of the line + 1
    lines.forEach((line) => {
        line.forEach((box, index) => {
            if(box !== "") {
                stacks[index + 1].unshift(box);
            }
        });
    });
}

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
        const [boxes, instructions] = inputs.split("\r\n\r\n");
        let lines = boxes.split("\r\n");
        lines = lines.map(line => line
            .split(new RegExp("(.{3}(?= |\B))")) // split each line into the columns
            .filter(Boolean) // filter out any empty results
            .filter(x => x.length > 1) // filter out the spaces
            .map(x => x.trim())) // remove whitespace on boxes
        const stacks = getStacks(lines);
        populateStacks(stacks, lines)
        console.log(stacks);
        console.log(instructions);
        console.log(lines);
    } catch (err) {
        console.log(err);
    }
}

export default solve