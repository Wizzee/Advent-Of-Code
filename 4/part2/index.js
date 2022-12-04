import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url';

function solve() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
    
        const inputs = fs.readFileSync(__dirname + "/input.txt", 'utf8');
    } catch (err) {
        console.log(err);
    }
}

export default solve