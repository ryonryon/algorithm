function StoreAdjacencyList<T>(arr: T[][]): Map<T, T[]> {
  const graph = new Map<T, T[]>();

  arr.forEach((element: T[]) => {
    if (graph.has(element[0])) {
      graph.get(element[0])!.push(element[1]);
    } else {
      graph.set(element[0], [element[1]]);
    }

    if (graph.has(element[1])) {
      graph.get(element[1])!.push(element[0]);
    } else {
      graph.set(element[1], [element[0]]);
    }
  });

  return graph;
}

export default StoreAdjacencyList;
