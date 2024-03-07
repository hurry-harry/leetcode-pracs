// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export class AddTwoNumbers {
  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let ret: ListNode = new ListNode(0);
    let opr: ListNode = new ListNode(0);
    opr = ret;
    let sum: number = 0;

    while (l1 != null || l2 != null || sum != 0) {
      if (l1 != null) {
        sum = sum + l1.val;
        l1 = l1.next;
      }
      if (l2 != null) {
        sum = sum + l2.val;
        l2 = l2.next;
      }
      opr.next = new ListNode(sum % 10);
      sum = sum / 10;
      opr = opr.next;
    }

    return ret;
  }
}