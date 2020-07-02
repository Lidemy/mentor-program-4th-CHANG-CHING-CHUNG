function search(arr, targetNum) {
    let start = 0;
    let end = arr.length - 1;
    return searchHelper(arr,targetNum,start,end);
    
    
}

function searchHelper(arr,targetNum, start, end) {
    let middleIdx = Math.floor((start + end) / 2)
    if(start > end) {
        return -1
    }
    if(arr[middleIdx] === targetNum) {
        return middleIdx;
    } else if(arr[middleIdx] > targetNum) {
        return searchHelper(arr, targetNum, start, middleIdx - 1)
    } else if(arr[middleIdx] < targetNum) {
        return searchHelper(arr,targetNum, middleIdx + 1, end)
    }
}

console.log(search([1, 3, 10, 14, 39], 14))
console.log(search([1, 3, 10, 14, 39], 299))