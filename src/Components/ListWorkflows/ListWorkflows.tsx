import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactFlow, { Edge, addEdge } from "react-flow-renderer";
import { convertToEdges, convertToNodes } from "../../utils/WorkFlowutil";
import { endpoints } from "../../services/endpoints";
import useFetch from "../../Hooks/useFetchHook";

const ListWorkflows = () => {
  const { id } = useParams();
  const { data } = useFetch(endpoints.WORKFLOW_ITEMS(id || ""));
  const [nodes, setNodes] = useState();
  const [edges, setEdges] = useState<Edge<any>[]>([]);

  useEffect(() => {
    if (data) {
      setNodes(convertToNodes(data));
      setEdges(convertToEdges(data));
    }
  }, [data]);

  const onConnect = useCallback(
    (params: any) => setEdges((els: any) => addEdge(params, els)),
    []
  );

  return (
    <div className="flex justify-center w-[100%] flex-col items-center">
      <div className="flex justify-center py-2 gap-4">
        <Link to={`/`}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back
          </button>
        </Link>
        <Link to={`/editWorkflow/${id}`}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </button>
        </Link>
      </div>
      <div className="h-[100vh] w-[1000px] bg-gray-300">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodesConnectable={true}
          onConnect={onConnect}
        />
      </div>
    </div>
  );
};

export default ListWorkflows;
