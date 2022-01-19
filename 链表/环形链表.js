// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

var hasCycle = function(head) {
    let flag = 0;
    head.index = 0;
    while (head && head.next) {
        head = head.next;
        if(head.index != undefined) {
            return true;
        } else {
            head.index = flag ++
        }    
      
    }
    return false;
};