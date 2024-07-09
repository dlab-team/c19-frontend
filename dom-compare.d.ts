declare module "dom-compare" {
  interface Difference {
    node: Node;
    message: string;
  }

  interface CompareResult {
    getResult(): boolean;
    getDifferences(): Difference[];
  }

  function compare(node1: Node, node2: Node): CompareResult;

  export { compare };
}
