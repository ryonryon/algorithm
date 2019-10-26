class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class DoublyListNode<T> {
  value: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  constructor(
    value: T,
    prev: ListNode<T> | null = null,
    next: ListNode<T> | null = null
  ) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export default ListNode;
