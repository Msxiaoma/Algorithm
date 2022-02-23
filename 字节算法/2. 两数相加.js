var addTwoNumbers = function(l1, l2) {
    let flag = 0;
    let newHead = new ListNode(-1);
    let cur = newHead;
    let sum = 0;
    while(l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
        if(sum < 10) {
            flag = 0;
        } else {
            flag = 1;
            sum = sum % 10;
        }
        cur.next = new ListNode(sum);
        cur = cur.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if(flag) {
        cur.next = new ListNode(flag);
    }
    return newHead.next;
};