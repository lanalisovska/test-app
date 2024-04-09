import { type Edge, type Node } from 'reactflow';

const GRID_SPACING_X = 200;
const GRID_SPACING_Y = 100;

export const getNodePosition = (nodeId: string, initialNodes: Node[], exeption: string) => {
  const index = initialNodes.findIndex((node) => node.id === nodeId);
  const x = (index % 4) * GRID_SPACING_X;
  const y = Math.floor(index / 3) * GRID_SPACING_Y;

  if (nodeId.includes(exeption)) {
    const shipIndex = initialNodes.findIndex((node) => node.id === nodeId);
    const shipY = (Math.floor(shipIndex / 3) + 2) * GRID_SPACING_Y;
    return { x, y: shipY };
  }

  return { x, y };
};

export const filterUniqueNodes = (nodes: Node[]) => {
  const uniqueNodesMap: Record<string, Node> = {};
  nodes.forEach((node: Node) => {
    uniqueNodesMap[node.id] = node;
  });
  return Object.values(uniqueNodesMap);
};

export const filterUniqueEdges = (nodes: Edge[]) => {
  const uniqueNodesMap: Record<string, Edge> = {};
  nodes.forEach((node: Edge) => {
    uniqueNodesMap[node.id] = node;
  });
  return Object.values(uniqueNodesMap);
};
