var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while (cur) {
        cur = head;
        let next = cur.next;
        cur.next = pre;
        cur = next;

    }
    return head;
};