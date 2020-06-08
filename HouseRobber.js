/* A house robber has a map of houses and the amount of gold in each home. 
The robber knows that if two adjacent homes are robbed, then the neighborhood security system will sound. 
Determine the total amount of gold the robber can get without setting off the alarm.

Input: 	 Array of Nonnegative Integers
Output: 	Integer
Example
Input: [1, 2, 3]				 =>	Output: 4
Input: [1, 2, 4, 1, 5, 12, 5]	=>	Output: 17  */

function houseRobber(arr){
    let sum = [];
    sum[0]=arr[0];
    sum[1]=arr[1];
    sum[2]=arr[2]+arr[0];
    let result = Math.max(sum[0],sum[1],sum[2])
    for(let i = 3; i< arr.length;i++){
        sum[i] = arr[i] + Math.max(sum[i-2],sum[i-3]);
        result = Math.max(result,sum[i]);
    }
    return result;
}

console.log(houseRobber([1, 2, 4, 1, 5, 12, 5,6,2]));