class MyCirclerQueue {
  private _array: number[];
  constructor(private size: number) {
    this._array = [];
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this._array.push(value);

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this._array.shift();

    return true;
  }

  front(): number {
    if (this.isEmpty()) return -1;
    return this._array[0];
  }

  rear(): number {
    if (this.isEmpty()) return -1;
    return this._array[this._array.length - 1];
  }

  isEmpty(): boolean {
    return this._array.length === 0;
  }

  isFull(): boolean {
    return this._array.length === this.size;
  }
}
