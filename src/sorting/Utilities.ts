export function Swap<T>(arr: T[], a: number, b: number): void {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

export function Shift<T>(arr: T[], shiftIndex: number, to: number): void {
  let temp = arr[shiftIndex];
  for (let i = shiftIndex; to < i; i--) {
    arr[i] = arr[i - 1];
  }
  arr[to] = temp;
}
