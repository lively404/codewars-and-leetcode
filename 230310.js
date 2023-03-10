// https://leetcode.com/problems/linked-list-random-node/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let length = 0;
    let temp = this.head;
    while(temp){
        length+=1;
        temp = temp.next;
    }
    let index = Math.floor(Math.random()*length);
    temp = this.head;
    while(index){
        index-=1;
        temp = temp.next;
    }
    return temp.val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */