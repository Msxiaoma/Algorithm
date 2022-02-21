function ListNode(val, next) {
    this.val = val != undefined ? val : 0;
    this.next = next != undefined ? next : null;
}

let arr = [0, 1, 2, 3]
function createList(arr) {
    let head = new ListNode(arr[0]);
    let cur = head;
    for(let i = 1; i < arr.length; i++) {
        cur.next  =new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}