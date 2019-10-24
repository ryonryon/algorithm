function VoronoiVillages(
  villageNumber: number,
  villagePositions: number[]
): number {
  const sortedVillages = villagePositions.sort((a, b) => a - b);

  const neighborhood = [];
  for (let i = 0; i < villageNumber - 1; i++) {
    neighborhood.push((sortedVillages[i] + sortedVillages[i + 1]) / 2);
  }

  let smallestNeighborhood = neighborhood[1] - neighborhood[0];
  for (let i = 1; i < neighborhood.length - 1; i++) {
    const dist = neighborhood[i + 1] - neighborhood[i];
    if (dist < smallestNeighborhood) smallestNeighborhood = dist;
  }

  return smallestNeighborhood;
}

describe("VoronoiVillages", () => {
  test("#1", () => {
    expect(VoronoiVillages(5, [16, 0, 10, 4, 15])).toBe(3.0);
  });
});
