const fs = require("fs");

const choosePoints = {
    Z: 3,
    Y: 2,
    X: 1
};

const resultPoints = {
    "win": 6,
    "draw": 3,
    "loss": 0
};

const action = {
    X: "loss",
    Y: "draw",
    Z: "win"
}

const results = {
    A: {
        draw: "X",
        loss: "Z",
        win: "Y"
    },
    B: {
        draw: "Y",
        loss: "X",
        win: "Z"
    },
    C: {
        draw: "Z",
        loss: "Y",
        win: "X"
    }
}

function figureOutShape(opponent, me) {
    let actionINeedToDo = action[me];
    return results[opponent][actionINeedToDo];
}

const matchups = {
    A: (me) => { // rock
        switch(me) {
            case "Z": // scissors
                pointTotal += resultPoints.loss;
                break;
            case "Y": // paper
                pointTotal += resultPoints.win;
                break;
            case "X": // rock
                pointTotal += resultPoints.draw;
                break;
        }
    },
    B: (me) => { //paper
        switch(me) {
            case "Z": // scissors
                pointTotal += resultPoints.win;
                break;
            case "Y": // paper
                pointTotal += resultPoints.draw;
                break;
            case "X": // rock
                pointTotal += resultPoints.loss;
                break;
        }
    },
    C: (me) => { // scissors
        switch(me) {
            case "Z": // scissors
                pointTotal += resultPoints.draw;
                break;
            case "Y": // paper
                pointTotal += resultPoints.loss;
                break;
            case "X": // rock
                pointTotal += resultPoints.win;
                break;
        }
    }
}

let pointTotal = 0;

const getResult = (opponent, me) => {
    pointTotal += choosePoints[me];
    matchups[opponent](me);
}

try {
    const inputs = fs.readFileSync("./input.txt", 'utf8');
    let rounds = inputs.split("\n");
    rounds = rounds.map(round => {
        round = round.split(" ");
        if(round[0] && round[1])  {
            let myChoice = figureOutShape(round[0], round[1]);
            getResult(round[0], myChoice);
            return round;
        }
    });

    console.log(rounds);
    console.log(pointTotal);
} catch (err) {
    console.log(err);
}
