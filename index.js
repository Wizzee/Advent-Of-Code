import * as dayThree  from "./3/index.js";

import { exit } from "process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

const days = {
    3: dayThree
}

const getSolution = (day, part) => {
    days[day].part(part);
}

if(argv.day && argv.part) {
    getSolution(argv.day, argv.part);
} else {
    console.error("day and part not valid")
    exit()
}