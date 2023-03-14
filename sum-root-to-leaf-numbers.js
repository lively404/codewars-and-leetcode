/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    function numberSum(root,currentSum){
        if(root==null) {
            sum+=currentSum;
            return}
        currentSum= currentSum*10+root.val;
        numberSum(root.left,currentSum);
        numberSum(root.right,currentSum);

    }
    numberSum(root,0);
    return sum/2;
};