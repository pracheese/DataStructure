/*The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/


var hammingDistance = function(x, y) {
    let x_binary = (x >>> 0).toString(2);
    let y_binary = (y >>> 0).toString(2);

    let result = 0
    const x_len = x_binary.length;
    const y_len = y_binary.length;

    if(x_len>y_len)
        y_binary = y_binary.padStart(x_len,'0')
    else
        x_binary = x_binary.padStart(y_len,'0')


    for(let i=0;i<x_binary.length;i++){
        if(x_binary[i]!=y_binary[i])
            result++
    }
    return result;
}


console.log(hammingDistance(4,3));