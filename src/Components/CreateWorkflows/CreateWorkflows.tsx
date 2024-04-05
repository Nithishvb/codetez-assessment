import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HTTPServices } from "../../services/HTTPServices";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../../Context/Context";

const CreateWorkflows = () => {
  const [workflowName, setWorflowName] = useState<string>("");
  const navigate = useNavigate();

  const CreateWorkflow = async (e: any) => {
    e.preventDefault();
    let workflowId = uuidv4();
    const response = await HTTPServices.createWorkflow({
      id: workflowId,
      workflowName,
    });
    navigate(`/listworkflow/${workflowId}`);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="text-center py-4">
        <h2 className="font-bold text-2xl">Create Workflow</h2>
      </div>
      <form
        className="max-w-sm mx-auto w-full pt-4"
        autoComplete="off"
        onSubmit={CreateWorkflow}
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Workflow Name
          </label>
          <input
            type="text"
            value={workflowName}
            onChange={(e) => setWorflowName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter workflow name"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkflows;
