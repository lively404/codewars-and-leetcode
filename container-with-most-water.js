// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = Math.min(height[0],height[height.length-1])*(height.length-1);
    function getMaxArea(area,i,j){
        let newArea = Math.min(height[i],height[j])*(j-i)
        console.log(newArea);
        return area>newArea?area:newArea;
    }
    while(left<right){
        if(height[left]<height[right]) left+=1
        else right-=1;
        max = getMaxArea(max,left,right);
    }
    return max;
};