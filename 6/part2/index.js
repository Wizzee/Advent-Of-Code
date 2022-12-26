import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { getMessages } from '../part1/index.js'

const UNIQUE_CHARS_NEEDED = 14;

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const input = fs.readFileSync(__dirname + "/../input.txt", 'utf8');
        getMessages(input, UNIQUE_CHARS_NEEDED);
    } catch (err) {
        console.log(err);
    }
}

export default solve