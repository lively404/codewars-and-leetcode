/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(1) space
const buildArray = (nums) => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        nums[i] = nums[i] + (len * (nums[nums[i]] % len)); 
    }
    console.log(nums)
    for (let i = 0; i < len; i++) {
        nums[i] = Math.floor(nums[i] / len);
    }
    
    return nums;
}

/*
// BRUTE FORCE SOLUTION
var buildArray = function(nums) {
   const ans = [];
   for(let i = 0; i < nums.length; i++){
       ans[i] = nums[nums[i]];
   } 
   return ans
}; */