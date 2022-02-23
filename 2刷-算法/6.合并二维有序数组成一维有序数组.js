var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(-1);
    let cur = dummyHead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1 : l2;
    return dummyHead.next;
};