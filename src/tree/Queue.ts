class Queue<T> {
  private _data: T[] = [];

  enqueue(element: T) {
    this._data.push(element);
  }

  dequeue(): T | undefined {
    return this._data.shift();
  }

  size(): number {
    return this._data.length;
  }

  leek(): T | null {
    return this._data[0];
  }
}

export default Queue;
