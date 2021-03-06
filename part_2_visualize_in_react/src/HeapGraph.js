import React from "react";
import Graph from "react-graph-vis";

const OPTIONS = {
  layout: {
    hierarchical: {
      sortMethod: "directed"
    }
  },
  edges: {
    color: 'black'
  },
  physics: {
    timestep: 1
  }
};

const HeapGraph = (props) => {
  const { array, highlight } = props;

  const nodes = [];
  const edges = [];

  for (let i = 1; i < array.length; i++) {
    let node = {
      id: i,
      label: String(array[i]),
      color: {
        background: i === highlight ? 'LightCoral' : 'CornflowerBlue',
        border: 'CornflowerBlue'
      }
    };

    nodes.push(node);
    let leftEdge = { from: i, to: 2 * i };
    let rightEdge = { from: i, to: 2 * i + 1 };
    edges.push(leftEdge, rightEdge);
  }

  const graph = { nodes, edges };

  return <Graph graph={graph} options={OPTIONS} />;
};

export default React.memo(HeapGraph);
