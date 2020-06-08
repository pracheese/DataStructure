function PowerSet(inputStr) {
    let left = 0;
    let result =[];
    let currentString;
    for (let right = 1; right<=inputStr.length, left<inputStr.length;right++){
       
        currentString = inputStr.slice(left,right);
        if(currentString!="")
            result.push(currentString);
        if((right > left+1)&&(left < inputStr.length)&&(right < inputStr.length)){
            currentString = inputStr[left]+inputStr[right];
            result.push(currentString);
        }
        if((left <= inputStr.length)&&(right === inputStr.length)){
            left++;
            right = 1;
        }
    }

    return result.sort();
}

console.log(PowerSet("abc"));