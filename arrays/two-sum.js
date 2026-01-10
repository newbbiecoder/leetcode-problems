var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        for(let j = 0; j < nums.length; j++) {
            let possibleNums = nums[j];
            if(i === j) continue;
            else if((num + possibleNums) === target) {
                return [i, j];
            }
        }
    }
};


console.log(twoSum([3,3], 6));
