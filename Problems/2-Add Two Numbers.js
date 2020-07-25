var addTwoNumbers = function(l1, l2) {
    let carry  = 0;
    let p1 = l1, p2 = l2;
    let dummy, cur;
    dummy = cur = new ListNode(0);

    while (l1 != null || l2 != null || carry != 0) {
        let v1 = l1 == null ? 0 : l1.val;
        let v2 = l2 == null ? 0 : l2.val;
        let sum = v1 + v2 + carry;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        carry = ~~(sum / 10);
        if (l1 != null) {l1 = l1.next; }
        if (l2 != null) {l2 = l2.next; }
    }
    return dummy.next;
};

// we add two list's value each time and replace next node as this node in loop
// meanwhile create a new linked list to carry sums
