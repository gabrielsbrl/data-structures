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
const matrix3x3x3 = [];

for(let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []; // Each array must be initialized - line
    for(let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = []; // column
        for(let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.table(matrix3x3x3);