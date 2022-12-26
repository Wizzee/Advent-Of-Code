import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

function getLines(boxes) {
    return boxes.split("\n")
        .map(line => {
            return line
                .split(new RegExp("(.{4}|.{3})")) // split each line into the columns
                .filter(Boolean) // filter out any empty results
                .filter(x => x.length > 1) // filter out the spaces
                .map(x => x.trim());
        }) // remove whitespace on boxes
}

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
            if(box && box !== "") {
                stacks[index + 1].unshift(box);
            }
        });
    });
}

function executeInstructions(instructions, stacks) {
    let instructionsMatch = getInstructionFormat(instructions);
    instructions
        .split("\n")
        .forEach(instruction => {
            console.log(instruction);
            const steps = instruction.match(instructionsMatch).map(Number);
            if (steps) {
                for (let i = 0; i < steps[0]; i++) {
                    stacks[steps[2]].push(stacks[steps[1]].pop());
                }
            }
        })
}
function getInstructionFormat() {
    return new RegExp(/\d+/, "g");
}
function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
        const [boxes, instructions] = inputs.split("\n\n");
        let lines = getLines(boxes);
        const stacks = getStacks(lines);
        populateStacks(stacks, lines);
        executeInstructions(instructions, stacks);
        console.table(stacks);
        Object.values(stacks).forEach(stack => {
            console.log(stack[stack.length - 1]);
        });
    } catch (err) {
        console.log(err);
    }
}

export default solve