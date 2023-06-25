//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

// 현재와 다음을 비교해서 다음것과 다르다면 다음으로 넘어가자.
// 같다면?
// 현재것을 next로 덮어버린다.
// 1,2,3,3
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let result = head

    const deleteLoop = (loopHead: ListNode | null) => {
        if(!loopHead) return loopHead;
        if(!loopHead.next)return loopHead;
        if(loopHead.val === loopHead.next.val) {
            loopHead.next = loopHead.next.next;
            deleteLoop(loopHead)
        } else {
            loopHead = loopHead.next
            deleteLoop(loopHead)
        }
    }
    deleteLoop(result)

    return result
};