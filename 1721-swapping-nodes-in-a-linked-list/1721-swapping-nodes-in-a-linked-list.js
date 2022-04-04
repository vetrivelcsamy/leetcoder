/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let current = head;
  let first = head;
  let last = head;  
  let count = 1;
   
  while(current.next !== null){
    if(count < k){
      first = first.next;  
    }else{
      last = last.next;   
    }
    count++;
    current = current.next;  
  }
  count = first.val;
  first.val = last.val;
  last.val = count;
  return head;  
};