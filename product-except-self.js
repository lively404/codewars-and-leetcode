// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    let mult = 1;
    for(let i = 0; i < nums.length; i++){
        output[i] = mult;
        mult = mult*nums[i];
    }
    mult = 1;
    for(let i = nums.length-1; i>=0; i--){
        output[i]*=mult;
        mult*= nums[i];
    }
    return output
};