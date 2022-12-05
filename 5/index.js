import { exit } from "process";
import { default as PartOne } from "./part1/index.js";
// import { default as PartTwo } from "./part2/index.js";

export function part(part) {
    switch(part) {
        case 1:
            PartOne();
            break;
        case 2:
            PartTwo();
            break;
        default:
            console.log("nothing available");
            exit();
    }
}