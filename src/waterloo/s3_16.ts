import StoreAdjacencyList from "../graph/StoreAdjacencyList";

function PhonomenalReviews(
  phoRestaurants: string[],
  restaurantList: string[][]
): number {
  let minimumPhoRoute = 0;
  const adjacencyList: Map<string, string[]> = StoreAdjacencyList(
    restaurantList
  );

  for (let i = 0; i < phoRestaurants.length; i++) {}
}

describe("PhonomenalReviews", () => {
  test("#1", () => {
    expect(
      PhonomenalReviews(
        ["5", "2"],
        [
          ["0", "1"],
          ["0", "2"],
          ["2", "3"],
          ["4", "3"],
          ["6", "1"],
          ["1", "5"],
          ["7", "3"]
        ]
      )
    ).toBe(3);
  });
});
