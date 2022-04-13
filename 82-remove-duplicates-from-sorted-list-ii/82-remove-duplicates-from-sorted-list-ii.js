/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head === null){
    return head;  
  } 
  
  let temphead = new ListNode(0, head)  
  let current = temphead;
  
    
  while(current.next  && current.next.next){      
   if(current.next.val === current.next.next.val){
      let buffer = current.next.val;
      let temp = current.next;   
      while(temp && temp.val === buffer){
         temp = temp.next 
      }
      current.next = temp; 
     }else {
       current = current.next;
   } 
  }
  return temphead.next; 
};