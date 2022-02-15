function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createList(arr) {
    let head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++) {
       cur.next = new ListNode(arr[i]);
       cur = cur.next;
    }
    return head;
}


var removeElements = function(head, val) {
    if (head === null) {
            return head;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};