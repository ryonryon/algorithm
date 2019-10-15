import ListNode from "./LinkedListNode";

class LinkedList<T> {
  private _length: number;
  private _node: ListNode<T> | null;

  constructor(node: T | null = null) {
    if (node) {
      this._node = new ListNode(node);
      this._length = 1;
    } else {
      this._node = null;
      this._length = 0;
    }
  }

  get node(): ListNode<T> {
    return this.node;
  }

  set node(node: ListNode<T>) {
    this._node = node;
  }

  get length(): number {
    return this._length;
  }

  set length(num: number) {
    this._length = num;
  }

  // todo
  reverse() {}

  push(element: T) {
    if (!this._node) {
      this._node = new ListNode(element);
    } else {
      let tempNode = this._node;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = new ListNode(element)!;
    }
  }

  pop(): T | null {
    if (!this._node) return null;
    let tempNode = this._node;
    while (tempNode.next) {
      if (!tempNode.next.next) {
        const val = tempNode.next.value;
        tempNode.next = null;
        return val;
      }
      tempNode.next = tempNode.next.next;
    }
    const val = this._node.value;
    this._node = null;
    return val;
  }
}

export default LinkedList;
