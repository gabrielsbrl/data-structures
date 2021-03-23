// temperature store code example
let averageTemp = [];

// day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 72;
averageTemp[0][2] = 75;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

// day 2
averageTemp[1] = [];
averageTemp[1][0] = 72;
averageTemp[1][1] = 72;
averageTemp[1][2] = 75;
averageTemp[1][3] = 79;
averageTemp[1][4] = 81;
averageTemp[1][5] = 81;

function printMatrix(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}

printMatrix(averageTemp);

// example with array of 3x3
