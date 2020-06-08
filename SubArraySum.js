/* 222 - Consecutive Subarray Sum
Given an array of positive integers and a target value, return true if there
 is a subarray of consecutive elements that sum up to this target value.

  Input: Array of integers, target value
Output: Boolean
Example
Input: [6, 12, 1, 7, 5, 2, 3], 14      	=> Output: true(7 + 5 + 2)
Input: [8, 3, 7, 9, 10, 1, 13], 50		=> Output: false

*/

function subArraySum(arr, target){
    let st = 0;
    let sum = 0;
  
  for(let end = 0; end<arr.length;end++)  {
    sum += arr[end];
    while(sum > target){
        sum -= arr[st];
        st++;
    }
    if(sum===target){
        return true;
    }
  }
  return false;
}
  let arr = [6,12,3,4,5,6,2,1];
  console.log(subArraySum(arr,18));
