import React from "react";
import { Link } from "react-router-dom";
import WorkflowShape from "../WorkflowShape/WorkflowShape";
import ReactFlow, { Edge } from "react-flow-renderer";

const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Process" },
    position: { x: 100, y: 200 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Process 2" },
    position: { x: 100, y: 300 },
  },
  {
    id: "4",
    type: "default",
    data: { label: "Process 3" },
    position: { x: 100, y: 400 },
  },
];

const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    data: {
      startLabel: "start edge label",
      endLabel: "end edge label",
    },
    animated: true,
  },
  { id: "e2", source: "2", target: "3", animated: true },
  { id: "e3", source: "3", target: "4", animated: true },
  { id: "e4", source: "4", target: "5", animated: true },
];

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
  return (
    <div className="flex justify-center w-[100%] flex-col items-center">
      <div className="flex justify-center py-2">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Edit
        </button>
      </div>
      <div className="h-[100vh] w-[1000px] bg-gray-300">
        <ReactFlow nodes={nodes} edges={edges} />
      </div>
    </div>
  );
};

export default ListWorkflows;
