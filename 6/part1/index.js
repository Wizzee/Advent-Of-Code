import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const UNIQUE_CHARS_NEEDED = 4;

export function getMessages(input, charsNeeded) {
    for(let i = 0; i < input.length; i++) {
        let uniqueCharCount = 0;
        const tempChars = input.slice(i, i + charsNeeded);
        for(let j = 0; j < tempChars.length; j++ ) {
            let occurrences = 0;
            for(let k = 0; k < tempChars.length; k++) {
                if(tempChars[j] === tempChars[k]) {
                    occurrences++;
                }
            }
            if(occurrences === 1) {
                uniqueCharCount++;
            }
        }
        if(uniqueCharCount === charsNeeded) {
            console.log(i + charsNeeded);
            return;
        }
    }
}

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