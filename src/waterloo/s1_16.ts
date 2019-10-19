// https://dmoj.ca/problem/ccc16s1

function Ragaman(firstStr: string, secondStr: string): string {
  if (firstStr.length != secondStr.length) return "N";
  const set = new Set();

  for (let i = 0; i < secondStr.length; i++) {
    const charValSecondStr = secondStr.charAt(i);
    if (charValSecondStr === "*") continue;

    let isMatch = false;

    for (let j = 0; j < firstStr.length; j++) {
      if (set.has(j)) continue;
      const charValFirstStr = firstStr.charAt(j);

      if (charValSecondStr === charValFirstStr) {
        set.add(j);
        isMatch = true;
        break;
      }
    }
    if (!isMatch) return "N";
  }

  return "A";
}

describe("Ragaman", () => {
  test("1", () => {
    expect(Ragaman("abba", "baaa")).toBe("N");
  });
  test("2", () => {
    expect(Ragaman("cccrocks", "socc*rk*")).toBe("A");
  });
});
