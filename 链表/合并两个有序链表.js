// 递归
var mergeTwoLists = function(list1, list2) {
    if(list1 == null) {
        return list2
    }
    if(list2 == null) {
        return list1
    }
    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;  // 这个return 最后跳出递归给函数的返回值
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;  // 这个return 最后跳出递归给函数的返回值
    }
    
}



// 遍历
// var mergeTwoLists = function(list1, list2) {
//     let head = new ListNode(-1);
//     let node = head;
//     while(list1 && list2) {
//         if(list1.val <= list2.val){
//            node.next = list1;
//            list1 = list1.next
//         } else {
//            node.next = list2;
//            list2 = list2.next
//         }
//         node = node.next;
//     }
//     node.next = list1 == null ? list2 : list1;
//     return  head.next;
// };