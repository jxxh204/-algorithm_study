
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    // 다음 값이 없을때까지 while
    // count를 센 후
    // countrk d
    if(!head) return null;
    if(!head.next) return head;
    const getLength = (head: ListNode | null) => {
        let count = 0;
        let c_head = head;
        while(c_head.next) {
            c_head = c_head.next
            count++;
        }
        console.log("count",count)
        return count;
    }
    let length = getLength(head);

    const reverse = (head: ListNode | null): ListNode | null => {
           //reverse
           // 5,2,3,4,1
        let currentHead = head
        let nextValue;
        let next;
        let count = length

        while(count !== 0){
            next = currentHead.next
            nextValue = currentHead.next.val
            currentHead.next.val = currentHead.val;
            currentHead.val = nextValue
            currentHead = next
            count--
        }
        length--;
        if(length === 0) return head;
        reverse(head);
    }
    reverse(head);

    return head;
};
