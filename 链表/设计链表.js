var MyLinkedList = function(val, next) {
    this.head = null;
    this.size = 0;
};

function ListNode(val, next) {
    this.val = val || undefined;
    this.next = next || null;
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    while(this.head) {
        if(index == i) {
            return this.head.val;
        }
        i++;
        this.head = this.head.next;
    }
    return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    return new ListNode(val, this.head);
};

MyLinkedList.prototype.getSize = function() {
   while(this.head) {
       this.size++
   }
   return this.size;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        return new ListNode(val);
    }
    while(this.head && this.head.next) {
        this.head = this.head.next;
        this.size++
    }
    return this.head.next = new ListNode(val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let size = this.getSize();
    if(index <=0) {
        return this.addAtHead(val);
    }
    if(index ==  size) {
        return
    }
    if(index > size) {
        return
    }
    
    while(node) {
        pre = node;
        cur = node.next;
        if(index == i) {
            new ListNode(val, node);
            return this.head;
        }
        i++;
        node = node.next;
    }
    return this.head;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */