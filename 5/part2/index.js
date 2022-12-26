import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { getLines, getStacks, getInstructionFormat, populateStacks } from "../part1/index.js"


function executeInstructions(instructions, stacks) {
    let instructionsMatch = getInstructionFormat(instructions);
    instructions
        .split("\n")
        .forEach(instruction => {
            console.log(instruction);
            const steps = instruction.match(instructionsMatch).map(Number);
            if (steps) {
                const boxesToMove = [];
                for (let i = 0; i < steps[0]; i++) {
                    boxesToMove.push(stacks[steps[1]].pop());
                }
                boxesToMove.reverse();
                stacks[steps[2]].push(...boxesToMove);
            }
        })
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