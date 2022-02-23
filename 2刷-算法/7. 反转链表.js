var reverseList = function(head) {
    let pre = null;
    while(head) {
        let next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};