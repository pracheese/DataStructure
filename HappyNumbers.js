/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, 
replace the number by the sum of the squares of its digits, and repeat the process until the number 
equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let sumHash={};
    let num = "";
    let sum = n;
    while(sum!=1){
        num=sum.toString();
        sum = 0;
        for(let i = 0; i < num.length;i++)
            sum+= Math.pow(parseInt(num[i]),2);
         
        if(!sumHash[sum])
            sumHash[sum]=true;
        else
            break;
    }
    if(sum==1){
        return true;}
    else{
        return false;}
    };
 
      
  
console.log((isHappy(13)===true) ? "happy" : "unhappy");