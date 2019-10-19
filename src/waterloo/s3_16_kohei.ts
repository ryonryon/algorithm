function countMinimumTraversal(
  restaurantLength: number,
  phoRestaurants: Set<number>,
  edges: [number, number][]
): number {
  let minimum = Infinity;
  const edgesEachRestaurant = new Map<number, number[]>();

  function traverse(
    restaurant: number,
    from: number | null
  ): [number, boolean] {
    const nextRestaurants = edgesEachRestaurant
      .get(restaurant)!
      .filter(res => res !== from);
    let includesPho = phoRestaurants.has(restaurant);
    let lengths: number[] = [];

    for (const nextRestaurant of nextRestaurants) {
      const [length, nextIncludesPho] = traverse(nextRestaurant, restaurant);

      includesPho = includesPho || nextIncludesPho;

      if (nextIncludesPho) {
        lengths.push(length);
      }
    }

    let lengthSum = 1;

    for (const length of lengths) {
      lengthSum += length * 2;
    }

    lengthSum -= Math.max(0, ...lengths);

    return [lengthSum, includesPho];
  }

  for (let i = 0; i < restaurantLength; ++i) {
    edgesEachRestaurant.set(i, []);
  }

  for (const edge of edges) {
    edgesEachRestaurant.get(edge[0])!.push(edge[1]);
    edgesEachRestaurant.get(edge[1])!.push(edge[0]);
  }

  for (const start of phoRestaurants) {
    const [length, includesPho] = traverse(start, null);

    if (includesPho) {
      minimum = Math.min(minimum, length - 1);
    }
  }

  return minimum;
}

console.log(
  "result:",
  countMinimumTraversal(8, new Set([5, 2]), [
    [0, 1],
    [0, 2],
    [2, 3],
    [4, 3],
    [6, 1],
    [1, 5],
    [7, 3]
  ])
);

console.log(
  "result:",
  countMinimumTraversal(8, new Set([0, 6, 4, 3, 7]), [
    [0, 1],
    [0, 2],
    [2, 3],
    [4, 3],
    [6, 1],
    [1, 5],
    [7, 3]
  ])
);

console.log(
  "result:",
  countMinimumTraversal(5, new Set([1, 2, 3, 4]), [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4]
  ])
);
