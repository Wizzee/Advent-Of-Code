import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

function getAssignments(input) {
    let groups = input.split("\r\n");
    return groups.map(group => {
        return group.split(",").map(elf => {
            let sections = elf.split("-");
            return {
                first: Number(sections[0]),
                second: Number(sections[1])
            }
        });
    })
}

function getOverlaps(assignments) {
    let overlaps = 0;
    assignments.forEach(assignment => {
        if(assignment[0].first <= assignment[1].first && assignment[0].second >= assignment[1].second) {
            overlaps++;
            return;
        }
        if(assignment[1].first <= assignment[0].first && assignment[1].second >= assignment[0].second) {
            overlaps++;
            return;
        }
    });
    return overlaps;
}

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
    
        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
        let assignments = getAssignments(inputs);

        let overlaps = getOverlaps(assignments);
        console.log(overlaps);
    } catch (err) {
        console.log(err);
    }
}

export default solve