import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const UNIQUE_CHARS_NEEDED = 4;

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const input = fs.readFileSync(__dirname + "/../input.txt", 'utf8');

        for(let i = 0; i < input.length; i++) {
            let uniqueCharCount = 0;
            const tempChars = input.slice(i, i + UNIQUE_CHARS_NEEDED);
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
            if(uniqueCharCount === UNIQUE_CHARS_NEEDED) {
                console.log(i + UNIQUE_CHARS_NEEDED);
                return;
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export default solve