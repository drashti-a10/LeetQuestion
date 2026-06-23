/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    while(lenA>lenB){
        lenA--;
        headA = headA.next;
    }

    while(lenB>lenA){
        lenB--;
        headB= headB.next;
    }

    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
};


function getLength(head){
    let length = 0;
    while(head){
        length++;
        head=head.next;
    }
    return length;
}