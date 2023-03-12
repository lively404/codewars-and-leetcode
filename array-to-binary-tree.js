// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/913488236/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function helper(arr, left, right){
  if(left > right) return null 
  const middle = Math.floor((left+right)/2)
  const root = new TreeNode(arr[middle])
  root.left = helper(arr, left, middle-1)
  root.right = helper(arr, middle+1, right)
  return root
}
return helper(nums, 0, nums.length-1)

};