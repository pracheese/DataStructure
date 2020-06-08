/* 
// Given an(MxN) matrix of integers, return an array in spiral order.

//   Input: Array of integers
// Output: Array of integers
// Input: [[1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]]

// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

function spiralPath(matrix){
    let rows = matrix.length;
    if(rows == 0) return;
    let cols = matrix[0].length;

    let rowMin = 0;
    let colMin = 0;
    let rowMax = rows-1;
    let colMax = cols-1;

    let result = [];
    
    while((rowMin <= rowMax)&&(colMin <= colMax)){
        for(let col = colMin; col <= colMax; col++){
            result.push(matrix[rowMin][col]);
        }
        rowMin++;

        for(let row = rowMin; row <= rowMax; row++){
            result.push(matrix[row][colMax]);
        }
        colMax--;

        if(rowMin<=rowMax){
            for(let col = colMax; col >= colMin; col--){
                result.push(matrix[rowMax][col]);
            }
        rowMax--;
        }

        if(colMin<=colMax){
            for(let row = rowMax; row >= rowMin; row--){
                result.push(matrix[row][colMin]);
            }
        colMin++;
        }
    }  
    return result;
    
  }

let matrix =[[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]];
  
console.log(spiralPath(matrix));