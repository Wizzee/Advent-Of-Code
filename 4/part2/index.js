import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { getAssignments } from "../part1/index.js";

function getPartialOverlaps(assignments) {
    let overlaps = 0;
    assignments.forEach(assignment => {
        // if first assignments number is between 2nd's first and last
        if(assignment[0].first >= assignment[1].first && assignment[0].first <= assignment[1].second) {
            overlaps++;
            return;
        }
        // if the second assignments number is between the 1st first and last
        if(assignment[1].first >= assignment[0].first && assignment[1].first <= assignment[0].second) {
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
        let partialOverlaps = getPartialOverlaps(assignments);
        console.log(partialOverlaps);
    } catch (err) {
        console.log(err);
    }
}

export default solve