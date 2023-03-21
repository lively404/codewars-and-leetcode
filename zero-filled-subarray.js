// https://leetcode.com/problems/number-of-zero-filled-subarrays/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(1) space, O(n) time.

var zeroFilledSubarray = function(nums) {
    let total = 0;
    let flag = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]!=0&&flag!=0) flag = 0;
        else if(nums[i]==0) flag += 1;
        total+=flag;
        }
    return total;
};

// basically flipping a variable depending on situation.
// if a value is zero and the flag is false, set it to one
// if value is not zero and flag is true, set it to false.