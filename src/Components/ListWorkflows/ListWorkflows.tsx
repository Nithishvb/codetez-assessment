import React, { useCallback, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import WorkflowShape from "../WorkflowShape/WorkflowShape";
import ReactFlow, { Edge, addEdge } from "react-flow-renderer";
import { AppContext } from "../../Context/Context";
import { convertToEdges, convertToNodes } from "../../utils/WorkFlowutil";

// const nodes = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "Start" },
//     position: { x: 100, y: 100 },
//   },
//   // {
//   //   id: "2",
//   //   type: "default",
//   //   data: { label: "Process" },
//   //   position: { x: 100, y: 200 },
//   // },
// ];

// const edges = [
//   {
//     id: "1",
//     source: "1",
//     target: "2",
//     data: {
//       startLabel: "start edge label",
//       endLabel: "end edge label",
//     },
//     animated: true,
//   },
//   { id: "e2", source: "2", target: "3", animated: true },
//   { id: "e3", source: "3", target: "4", animated: true },
//   { id: "e4", source: "4", target: "5", animated: true },
// ];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    data: {
      label: "edge label",
    },
    type: "custom",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    data: {
      startLabel: "start edge label",
      endLabel: "end edge label",
    },
    type: "start-end",
  },
];

const ListWorkflows = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const [nodes, setNodes] = useState(convertToNodes(state.workflow.nodes));
  const [edges, setEdges] = useState(convertToEdges(state.workflow.nodes));
  const onConnect = useCallback((params: any) => setEdges((els: any) => addEdge(params, els)), []);
  console.log(state);
  console.log(nodes);
  console.log(edges);

  return (
    <div className="flex justify-center w-[100%] flex-col items-center">
      <div className="flex justify-center py-2">
        <Link to={`/editWorkflow/${id}`}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </button>
        </Link>
      </div>
      <div className="h-[100vh] w-[1000px] bg-gray-300">
        <ReactFlow nodes={nodes} edges={edges} nodesConnectable={true} onConnect={onConnect} />
      </div>
    </div>
  );
};

export default ListWorkflows;
